import HandleError from "../utils/HandleError.js";
import HandleResponse from "../utils/HandleResponse.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// Function to handle AI requests
export const chatWithAI = AsyncHandler(async (req, res, next) => {
  const { model, prompt } = req.body;

  if (!prompt) {
    return res
    .status(400)
    .json(
        new HandleError(400, "Prompt is required")
    );
  }

  try {
    // Google Gemini API call
    const geminiResponse = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
      }
    );

    const responseData =
      geminiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini.";

    return res
    .status(200)
    .json(
        new HandleResponse(200, "Success", { response: responseData })
    );
  } catch (error) {
    console.error("AI API Error:", error.response?.data || error.message);
    return res
    .status(500).json(new HandleError(500, "Failed to fetch AI response."));
  }
});
