import os
import json

# Current directory: api/
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Path to the ml_models folder
DATA_PATH = os.path.join(BASE_DIR, "ml_models", "data.json")

target = 1

with open(DATA_PATH, "r") as f:
    course_data = json.load(f)

for key, value in course_data.items():
    if(key == "MIXED"):
        for key2, value2 in value['COURSE'].items():
            if(value2 == target):
                print(key2)