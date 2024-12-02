"use client";
import React, { useState } from "react";
import axios from "axios";

const PronunciationTest: React.FC = () => {
  const [word, setWord] = useState<string>("");

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/pronunciation/?word=${word}`);
      alert(response.data.message);
    } catch (error) {
      console.error("Error during pronunciation test:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-3xl mb-4">Pronunciation Test</h1>
      <input
        type="text"
        value={word}
        onChange={handleWordChange}
        className="border p-4 mb-4 w-80"
        placeholder="Enter a word"
      />
      <button onClick={handleSubmit} className="px-6 py-2 bg-orange-500 text-white rounded">
        Start Pronunciation Test
      </button>
    </div>
  );
};

export default PronunciationTest;
