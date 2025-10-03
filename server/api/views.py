import joblib
import os
import json
import pandas as pd
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
DATA_PATH = os.path.join(BASE_DIR, "ml_models", "data.json")

# Load model
model_1 = joblib.load(MODEL_1_PATH)
model_2 = joblib.load(MODEL_2_PATH)
model_3 = joblib.load(MODEL_3_PATH)  

class PredictView(APIView):
    def post(self, request):
        try:
            # Open and load the JSON file
            with open(DATA_PATH, "r") as f:
                course_data = json.load(f)

            # Get JSON input from request
            data = request.data  

            # Validate input (optional, but recommended)
            if not all(k in data for k in ["CET", "GPA", "STRAND"]):
                return Response(
                    {"error": "Missing required fields (CET, GPA, STRAND)"},
                    status=status.HTTP_400_BAD_REQUEST
                )
                
            # Create DataFrame with correct feature names
            features = pd.DataFrame([{
                "CET": float(data["CET"]),
                "GPA": float(data["GPA"]),
                "STRAND": None  
            }])
            
            strand_1 = course_data['MIXED']['STRAND'][data["STRAND"]]
            features['STRAND'] = strand_1
            prediction_1 = model_1.predict(features)[0]
            
            strand_2 = course_data['ALIGNED']['STRAND'][data["STRAND"]]
            features['STRAND'] = strand_2
            prediction_2 = model_2.predict(features)[0]
            
            strand_3 = course_data['NOT_ALIGNED']['STRAND'][data["STRAND"]]
            features['STRAND'] = strand_3
            prediction_3 = model_3.predict(features)[0]
            
            college_1 = None
            college_2 = None
            college_3 = None
            
            for key, value in course_data.items():
                if(key == "MIXED"):
                    for key2, value2 in value['COURSE'].items():
                        if(value2 == prediction_1):
                            college_1 = key2
                            break
            
            for key, value in course_data.items():
                if(key == "ALIGNED"):
                    for key2, value2 in value['COURSE'].items():
                        if(value2 == prediction_1):
                            college_2 = key2
                            break
                        
            for key, value in course_data.items():
                if(key == "NOT_ALIGNED"):
                    for key2, value2 in value['COURSE'].items():
                        if(value2 == prediction_1):
                            college_3 = key2
                            break
        
            
            predictions = {
                "mixed": {
                    "name" : college_1,
                    "img": "test",
                    "about": "test",
                    "why": "test",
                    "programs": ["test1", "test2"],
                    "career_path": ["test1", "test2"]
                },
                "aligned": {
                    "name" : college_2,
                    "img": "test",
                    "about": "test",
                    "why": "test",
                    "programs": ["test1", "test2"],
                    "career_path": ["test1", "test2"]
                },
                "not_aligned": {
                    "name" : college_3,
                    "img": "test",
                    "about": "test",
                    "why": "test",
                    "programs": ["test1", "test2"],
                    "career_path": ["test1", "test2"]
                }
            }

            return Response(
                predictions,
                status=status.HTTP_200_OK
            )

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)