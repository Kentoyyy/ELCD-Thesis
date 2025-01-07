"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import wordsData from "../../../data/word_attack_data.json";

const WordAttack = () => {
  const [entryLevel, setEntryLevel] = useState<number>(1);
  const [words, setWords] = useState<any[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [userResponses, setUserResponses] = useState<{ word: string; recognized: string }[]>([]);
  const [isListening, setIsListening] = useState<boolean>(false);

  useEffect(() => {
    const filteredWords = wordsData.filter((word: any) => word.level === entryLevel);
    setWords(filteredWords);
    setCurrentWordIndex(0);
    setUserResponses([]);
  }, [entryLevel]);

  const handleResponse = async () => {
    if (!words[currentWordIndex]) return;
    const word = words[currentWordIndex].word;

    try {
      setIsListening(true);
      const response = await axios.post("http://localhost:8000/api/word-attack/speech", null, {
        params: { user_id: "test_user", word },
      });

      const { recognized_word } = response.data;
      setUserResponses((prev) => [
        ...prev,
        { word, recognized: recognized_word },
      ]);

      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        await submitResults();
      }
    } catch (error: any) {
      console.error("Speech recognition error:", error);
      alert(error.response?.data?.detail || "An error occurred. Please try again.");
    } finally {
      setIsListening(false);
    }
  };

  const submitResults = async () => {
    try {
      const payload = {
        userId: "test_user",
        responses: userResponses,
      };
      const response = await axios.post("http://localhost:8000/api/word-attack/results", payload);
      alert("Test completed and submitted successfully!");
    } catch (error) {
      console.error("Error submitting results:", error);
      alert("Failed to submit results. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-4 text-center">Word Attack Test</h1>
        <div className="mb-4">
          <label className="block mb-2">Select Entry Level:</label>
          <select
            value={entryLevel}
            onChange={(e) => setEntryLevel(Number(e.target.value))}
            className="w-full p-2 border rounded"
          >
            <option value={1}>Level 1 (Grades 1-3)</option>
            <option value={2}>Level 2 (Grades 4-6)</option>
            <option value={3}>Level 3 (Advanced)</option>
          </select>
        </div>

        {currentWordIndex < words.length ? (
          <div>
            <p className="text-center mb-4">Word: {words[currentWordIndex].word}</p>
            <button
              onClick={handleResponse}
              disabled={isListening}
              className="px-4 py-2 bg-blue-500 text-white rounded w-full"
            >
              {isListening ? "Listening..." : "Start Speaking"}
            </button>
          </div>
        ) : (
          <p className="text-center text-green-600">Test complete! Submitting results...</p>
        )}
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Responses</h2>
        <ul>
          {userResponses.map((response, index) => (
            <li key={index}>
              <strong>Word:</strong> {response.word} | <strong>Recognized:</strong> {response.recognized}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WordAttack;
