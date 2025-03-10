import React, { useState } from "react";
import chatWithAI from "../services/aiService";
import "../src/App.css"

const LegalIntelligence = () => {
  const [text, setText] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeText = async () => {
    if (!text.trim()) return; // Prevent empty input analysis

    setLoading(true);
    const prompt = `Analyze the following legal document:\n"${text}". Identify missing clauses, legal issues, and summarize in simple terms. without any symbols result (200 words)`;
    const response = await chatWithAI("gemini-2.0-flash", prompt);
    setAnalysis(response);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-6">
      {/* Card Container */}
      <div className="w-full max-w-3xl bg-zinc-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-zinc-200 mb-4 text-center">
          Legal Intelligence
        </h2>

        {/* Textarea Input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste legal text here..."
          className="w-full h-40 p-4 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:ring-2 focus:ring-zinc-400 focus:outline-none resize-none"
        />

        {/* Analyze Button */}
        <button
          onClick={analyzeText}
          disabled={loading}
          className="w-full mt-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-all text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {/* Display Analysis Result */}
        {analysis && (
          <div className="mt-4 p-4 bg-zinc-700 rounded-lg text-zinc-300 border border-zinc-600">
            <p>{analysis}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalIntelligence;
