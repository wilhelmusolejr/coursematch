import joblib
import os
import json
import pandas as pd

# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status

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

# Open and load the JSON file
with open(COURSEDATA_PATH, "r") as f:
    course_data = json.load(f)
with open(DEFINITION_PATH, "r") as f:
    definition_data = json.load(f)
    
# Get JSON input from request
data = {
    "CET": 7,
    "GPA": 8,
    "STRAND": "ABM"
} 

college_type = ['MIXED', 'ALIGNED', 'NOT_ALIGNED']
models = [model_1, model_2, model_3]
dataframes = {}
            
# Create DataFrame with correct feature names
features = pd.DataFrame([{
    "CET": data["CET"],
    "GPA": data['GPA'],
    "STRAND": None  
}])
            
for college in college_type:
    dataframes[college] = features.copy()
    
for index, college in enumerate(college_type):
    dataframes[college]['STRAND'] = course_data[college]['STRAND'][data["STRAND"]]
    prediction = models[index].predict(dataframes[college])[0]
    dataframes[college]["PREDICTION"] = prediction
    
for college_dataframe in dataframes:
    target_college = dataframes[college_dataframe]["PREDICTION"].values[0]
    
    for key, value in course_data[college_dataframe]['COLLEGE'].items():
        if(value == target_college):
            dataframes[college_dataframe]["PREDICTION"] = key

prediction_result = {}

for index, college in enumerate(college_type):
    college_name = dataframes[college]["PREDICTION"].values[0]
    
    for key, value in definition_data.items():
        if(key == college_name):
            prediction_result[college.lower()] = value
            break

for key, value in prediction_result.items():
    updated_name = prediction_result['mixed']['name'].replace(" ", "+")
    prediction_result[key]['img'] = "https://dummyimage.com/200x200/cccccc/000000.png&text=" + updated_name

for key,value in definition_data.items():
    updated_name = definition_data[key]['name'].replace(" ", "+")
    definition_data[key]['img'] = "https://dummyimage.com/200x200/cccccc/000000.png&text=" + updated_name
    