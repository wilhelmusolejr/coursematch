import axios from "axios";

const API_URL = import.meta.env.VITE_DJANGO_API_URL;

export const getPrediction = async (payload) => {
  try {
    const response = await axios.post(API_URL, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Prediction API error:",
      error.response?.data || error.message
    );
    throw error;
  }
};
