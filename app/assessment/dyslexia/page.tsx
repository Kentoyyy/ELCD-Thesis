"use client";

import React, { useState } from "react";
import axios from "axios";

const PracticePage = () => {
  const [testType, setTestType] = useState<"dictation" | "pronunciation" | null>(null);
  const [level, setLevel] = useState<number | null>(null);
  const [dictatedWords, setDictatedWords] = useState<string[]>([]);
  const [typedWords, setTypedWords] = useState<string[]>(Array(10).fill(""));
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const API_BASE_URL = "http://localhost:8000"; // Replace with your backend URL

  const startDictation = async () => {
    if (level === null) {
      alert("Please select a level.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/generate-vocabulary/`, {
        params: { level },
      });
      setDictatedWords(response.data.words);
    } catch (error) {
      console.error(error);
      alert("Failed to start dictation.");
    } finally {
      setLoading(false);
    }
  };

  const submitDictationAnswers = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/dictation/`, {
        words: dictatedWords,
        userInputs: typedWords,
      });
      setResults(response.data.responses);
    } catch (error) {
      console.error(error);
      alert("Failed to submit answers.");
    }
  };

  const startPronunciation = async () => {
    if (level === null) {
      alert("Please select a level.");
      return;
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/pronunciation-words/`, {
        params: { level },
      });
      setDictatedWords(response.data.words);
    } catch (error) {
      console.error(error);
      alert("Failed to start pronunciation test.");
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Practice Page
      </h1>
      {!testType && (
        <div className="flex flex-col gap-4">
          <button
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
            onClick={() => setTestType("dictation")}
          >
            Dictation Test
          </button>
          <button
            className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-500 transition"
            onClick={() => setTestType("pronunciation")}
          >
            Pronunciation Test
          </button>
        </div>
      )}

      {testType && (
        <>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Choose Difficulty Level:
            </label>
            <select
              className="p-2 border rounded w-full"
              onChange={(e) => setLevel(Number(e.target.value))}
            >
              <option value="">Select Level</option>
              <option value={1}>Elementary</option>
              <option value={2}>Intermediate</option>
            </select>
          </div>

          {testType === "dictation" && (
            <>
              <button
                className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition"
                onClick={startDictation}
                disabled={loading || dictatedWords.length > 0}
              >
                {loading ? "Loading..." : "Start Dictation"}
              </button>

              {dictatedWords.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-lg font-medium mb-4">Type the Words Below:</h2>
                  {dictatedWords.map((_, index) => (
                    <div key={index} className="flex items-center gap-4 mb-3">
                      <label className="text-sm text-gray-600">Word {index + 1}:</label>
                      <input
                        type="text"
                        className="p-2 border rounded w-full"
                        value={typedWords[index]}
                        onChange={(e) => {
                          const updatedWords = [...typedWords];
                          updatedWords[index] = e.target.value;
                          setTypedWords(updatedWords);
                        }}
                      />
                    </div>
                  ))}
                  <button
                    className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-500 transition mt-4"
                    onClick={submitDictationAnswers}
                  >
                    Submit Answers
                  </button>
                </div>
              )}
            </>
          )}

          {testType === "pronunciation" && (
            <>
              <button
                className="w-full bg-gray-600 text-white py-2 rounded hover:bg-gray-500 transition"
                onClick={startPronunciation}
              >
                Start Pronunciation
              </button>
              {dictatedWords.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-lg font-medium mb-4">Pronounce the Words:</h2>
                  <ul className="space-y-3">
                    {dictatedWords.map((word, index) => (
                      <li
                        key={index}
                        className="p-2 border rounded bg-gray-50 text-gray-700"
                      >
                        <span className="font-medium">Word {index + 1}:</span> {word}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default PracticePage;
