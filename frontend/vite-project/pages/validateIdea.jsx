import React, { useState } from "react";
import chatWithAI from "../services/aiService";

const ValidateIdea = () => {
  const [idea, setIdea] = useState("");
  const [validationResult, setValidationResult] = useState("");
  const [loading, setLoading] = useState(false);

  const validateIdea = async () => {
    if (!idea.trim()) return; // Prevent empty input validation

    setLoading(true);
    const prompt = `Evaluate the legal risks, compliance issues, and enhancements for this business idea: '${idea}', with a concise analysis (200 words) without any symbols.`;
    const response = await chatWithAI("gemini-2.0-flash", prompt);
    setValidationResult(response);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-6">
      {/* Card Container */}
      <div className="w-full max-w-2xl bg-zinc-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-zinc-200 mb-4 text-center">
          Validate My Idea
        </h2>

        {/* Textarea Input */}
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Describe your business idea..."
          className="w-full h-32 p-3 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:ring-2 focus:ring-zinc-400 focus:outline-none resize-none"
        />

        {/* Validate Button */}
        <button
          onClick={validateIdea}
          disabled={loading}
          className="w-full mt-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-all text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Validating..." : "Validate"}
        </button>

        {/* Display Result */}
        {validationResult && (
          <div className="mt-4 p-4 bg-zinc-700 rounded-lg text-zinc-300">
            <p>{validationResult}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ValidateIdea;
