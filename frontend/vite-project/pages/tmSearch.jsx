import React, { useState } from "react";
import chatWithAI from "../services/aiService";
import "../src/App.css";

const TMSearch = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a trademark name.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
        const prompt = `Analyze the trademark '${query}' in a structured, professional format without markdown symbols:
        - Legal Risks: (List key risks briefly)
        - Potential Conflicts: (Mention existing trademarks or similar names)
        - Success Probability: (Give a percentage with a short explanation)
        - Recommendations: (Suggest steps to improve chances)`;

      const response = await chatWithAI("gemini-2.0-flash", prompt);

      if (response) {
        setResult(response);
      } else {
        setError("No response received. Try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-6">
      {/* Card Container */}
      <div className="w-full max-w-3xl bg-zinc-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4 text-center">
          Trademark Search+
        </h2>

        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter brand name..."
          className="w-full p-3 rounded-lg bg-zinc-700 text-white border border-zinc-600 focus:ring-2 focus:ring-gray-400 focus:outline-none"
        />

        {/* Error Message */}
        {error && <p className="text-red-400 mt-2">{error}</p>}

        {/* Search Button */}
        <button
          onClick={handleSearch}
          disabled={loading}
          className="w-full mt-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-all text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Searching..." : "Search Trademark"}
        </button>

        {/* Display Result */}
        {result && (
          <div className="mt-4 p-4 bg-zinc-700 rounded-lg text-gray-300">
              {result && (
                <div className="mt-4 p-4 bg-zinc-700 rounded-lg text-gray-300">
                  <h3 className="text-xl font-semibold mb-2">
                    Analysis Report
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: result.replace(/\n/g, "<br>"),
                    }}
                  />
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TMSearch;
