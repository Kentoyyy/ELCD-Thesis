"use client";
import React, { useState } from "react";
import { fetchWords, submitDictation } from "../../../utils/api";

const Dyslexia: React.FC = () => {
  const [level, setLevel] = useState(1);
  const [words, setWords] = useState<string[]>([]);
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startTest = async () => {
    setLoading(true);
    setError(null);
    try {
      const wordList = await fetchWords(level);
      setWords(wordList);
      setTypedWords(new Array(wordList.length).fill(""));
      setAccuracy(null);
    } catch (err) {
      setError("Failed to fetch words. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const submitTest = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await submitDictation(typedWords, words);
      setAccuracy(result.accuracy);
      alert(`Correct Words: ${result.correct_words.join(", ")}`);
    } catch (err) {
      setError("Failed to submit the test. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-4">
      {/* Navbar */}
      <header className="flex justify-between items-center border-b border-gray-700 pb-2">
        <h1 className="text-2xl font-bold">Dyslexia Web APP</h1>
        <nav>
          <ul className="flex space-x-4 text-lg">
            <li className="hover:text-red-400 cursor-pointer">Home</li>
            <li className="text-red-500 font-bold border-b-2 border-red-500 cursor-pointer">Pronunciation</li>
            <li className="hover:text-red-400 cursor-pointer">Dictation</li>
            <li className="hover:text-red-400 cursor-pointer">About</li>
          </ul>
        </nav>
      </header>

      {/* Submenu */}
      <div className="mt-4 text-sm border-b border-gray-700 pb-2">
        <ul className="flex space-x-4">
          <li className="text-red-500 font-bold cursor-pointer">Home</li>
          <li className="hover:text-red-400 cursor-pointer">Pronunciation Test</li>
          <li className="hover:text-red-400 cursor-pointer">Phonetics</li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="mt-8">
        <h2 className="text-3xl font-bold mb-4">A Test for Dyslexia</h2>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Select your grade level</label>
          <select
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700"
          >
            <option value={1}>5th-7th Grade</option>
            <option value={2}>2nd-4th Grade</option>
          </select>
        </div>

        <button
          onClick={startTest}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-red-700"
          disabled={loading}
        >
          {loading ? "Loading..." : "Start Test"}
        </button>

        {error && (
          <p className="mt-4 text-red-500">
            <strong>Error:</strong> {error}
          </p>
        )}

        {words.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Type the words you hear:</h3>
            {words.map((word, index) => (
              <div key={index} className="mb-4">
                <label className="block mb-1">Word {index + 1}:</label>
                <input
                  type="text"
                  value={typedWords[index]}
                  onChange={(e) => {
                    const updatedWords = [...typedWords];
                    updatedWords[index] = e.target.value;
                    setTypedWords(updatedWords);
                  }}
                  className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700"
                />
              </div>
            ))}
            <button
              onClick={submitTest}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-green-700"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        )}

        {accuracy !== null && (
          <p className="mt-4 text-lg">
            Accuracy: <span className="font-bold">{accuracy}</span>/{words.length}
          </p>
        )}
      </main>
    </div>
  );
};

export default Dyslexia;
