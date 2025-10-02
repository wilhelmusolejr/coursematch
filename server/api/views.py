import joblib
import os
import pandas as pd
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Load the model (only once when Django starts)
# Current directory: api/
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Path to the ml_models folder
MODEL_PATH = os.path.join(BASE_DIR, "ml_models", "model_mixed.pkl")

# Load model
model = joblib.load(MODEL_PATH)

class PredictView(APIView):
    def post(self, request):
        try:
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
                "STRAND": float(data["STRAND"])
            }])

            # Predict
            prediction = model.predict(features)[0]

            return Response({"prediction": str(prediction)}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)