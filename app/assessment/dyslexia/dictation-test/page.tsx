"use client";
import React, { useState } from "react";
import axios from "axios";

const DictationTest: React.FC = () => {
  const [level, setLevel] = useState<number>(1);
  const [words, setWords] = useState<string[]>(Array(10).fill(""));
  const [result, setResult] = useState<any>(null);

  const handleWordChange = (index: number, value: string) => {
    const newWords = [...words];
    newWords[index] = value;
    setWords(newWords);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/dictation/", {
        level,
        words,
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error during dictation test:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-3xl mb-4">Dictation Test</h1>
      <select
        value={level}
        onChange={(e) => setLevel(Number(e.target.value))}
        className="border p-2 mb-4 w-40"
      >
        <option value={1}>Intermediate (5th-7th)</option>
        <option value={2}>Elementary (2nd-4th)</option>
      </select>
      {words.map((word, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Word ${index + 1}`}
          value={word}
          onChange={(e) => handleWordChange(index, e.target.value)}
          className="border p-2 mb-2 w-80"
        />
      ))}
      <button onClick={handleSubmit} className="px-6 py-2 bg-green-500 text-white rounded">
        Submit
      </button>
      {result && (
        <div className="mt-6">
          <h2 className="text-xl">Dictation Result:</h2>
          <p>Expected Words: {result.expected}</p>
          <p>Your Words: {result.recognized}</p>
          <p>Accuracy: {result.accuracy.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default DictationTest;
