import joblib
import os
import json
import pandas as pd
import math
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Load the model (only once when Django starts)
# Current directory: api/
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Path to the ml_models folder
MODEL_1_PATH = os.path.join(BASE_DIR, "ml_models", "model_aligned.pkl")
MODEL_2_PATH = os.path.join(BASE_DIR, "ml_models", "model_not_aligned.pkl")
MODEL_3_PATH = os.path.join(BASE_DIR, "ml_models", "model_mixed.pkl")
COURSEDATA_PATH = os.path.join(BASE_DIR, "ml_models", "data.json")
DEFINITION_PATH = os.path.join(BASE_DIR, "ml_models", "definition.json")

# Load model
model_1 = joblib.load(MODEL_1_PATH)
model_2 = joblib.load(MODEL_2_PATH)
model_3 = joblib.load(MODEL_3_PATH)

models = [model_1, model_2, model_3]

class PredictView(APIView):
    def post(self, request):
        try:
            # Open and load the JSON file
            with open(COURSEDATA_PATH, "r") as f:
                course_data = json.load(f)
            with open(DEFINITION_PATH, "r") as f:
                definition_data = json.load(f)

            # Get JSON input from request
            data = request.data  

            # Validate input (optional, but recommended)
            if not all(k in data for k in ["CET", "GPA", "STRAND"]):
                return Response(
                    {"error": "Missing required fields (CET, GPA, STRAND)"},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            college_type = ['MIXED', 'ALIGNED', 'NOT_ALIGNED']
            models = [model_1, model_2, model_3]
            dataframes = {}
            
            # Create DataFrame with correct feature names
            features = pd.DataFrame([{
                "CET": math.floor(data['CET'] / 10),
                "GPA": math.floor(data['GPA'] / 10),
                "STRAND": "ABM"  
            }])
            
            # Creates a copy of 3 features for each college type
            for college in college_type:
                dataframes[college] = features.copy()

            # Predict for each college type
            for index, college in enumerate(college_type):
                # Map STRAND to its corresponding numerical value
                dataframes[college]['STRAND'] = float(course_data[college]['STRAND'][data["STRAND"]])
                prediction = models[index].predict(dataframes[college])[0]
                # Save the prediction to the DataFrame = prediction column
                dataframes[college]["PREDICTION"] = prediction
            
            # Map the predicted numerical value back to its corresponding college name
            for college_dataframe in dataframes:
                target_college = dataframes[college_dataframe]["PREDICTION"].values[0]
                
                for key, value in course_data[college_dataframe]['COLLEGE'].items():
                    if(value == target_college):
                        dataframes[college_dataframe]["PREDICTION"] = key
                    # Needs a catcher if no match found
                    # Needs a catcher if no match found
                    # Needs a catcher if no match found

            prediction_result = {}
            
            # Gather of data of the predicted college
            for index, college in enumerate(college_type):
                college_name = dataframes[college]["PREDICTION"].values[0]
                
                for key, value in definition_data.items():
                    if(key == college_name):
                        update_name = value['name'].replace(" ", "+")
                        value['img'] = "https://dummyimage.com/200x200/cccccc/000000.png&text=" + update_name
                        prediction_result[college.lower()] = value
                        break
            
            return Response(
                {
                    "predictions": prediction_result,
                    "debug": dataframes
                },
                status=status.HTTP_200_OK
            )

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)