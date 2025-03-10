import axios from "axios";

// const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // Ensure it's prefixed with VITE_ for Vite projects

const chatWithAI = async (model, prompt) => {
  try {
    const response = await axios.post(
      "http://localhost:7000/api/v1/ai/chat", {
        model,
        prompt
      }
    ); 

    return response.data.message?.response || "No response from AI.";
  } catch (error) {
    console.error("Error calling AI API:", error.response?.data || error.message);
    return "Sorry, something went wrong.";
  }
};

export default chatWithAI;
