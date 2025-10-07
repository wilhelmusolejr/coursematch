import axios from "axios";

const API_URL = "http://localhost:8000/api/courses/";

export const getAllCourse = async (payload) => {
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
