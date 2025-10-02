import joblib
import os
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Load the model (only once when Django starts)
MODEL_PATH = os.path.join(os.path.dirname(__file__), "model_mixed.pkl")
model = joblib.load(MODEL_PATH)

class PredictView(APIView):
    def post(self, request):
        try:
            # # Get JSON input
            data = {
              "CET": 8.0,
              "GPA": 9.0,
              "STRAND": 3,
            }
            
              # Extract features in the right order your model expects
            features = [
                float(data.get("CET")),
                float(data.get("GPA")),
                float(data.get("STRAND"))
            ]

            prediction = model.predict([features  ])[0]
            
            print(prediction)
            
            return Response({"prediction": prediction}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
