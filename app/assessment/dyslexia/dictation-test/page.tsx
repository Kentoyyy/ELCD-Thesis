"use client";
import { useState } from 'react';
import axios from 'axios';

export default function DictationTest() {
  const [level, setLevel] = useState(1);
  const [words, setWords] = useState<string[]>([]);
  const [score, setScore] = useState<number | null>(null);

  const handleStartTest = async () => {
    try {
      const res = await axios.post('http://localhost:8000/start-dictation/', { level });
      setWords(res.data.dictated_words || []);
    } catch (err) {
      setWords(['Error starting test.']);
    }
  };

  const handleScore = async () => {
    try {
      const res = await axios.post('http://localhost:8000/calculate-dictation-score/', {
        typed_words: words,
        dictated_words: words,
      });
      setScore(res.data.score);
    } catch (err) {
      setScore(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dictation Test</h1>
      <button onClick={handleStartTest} className="bg-purple-500 text-white py-2 px-4 rounded mb-4">
        Start Test
      </button>
      {words.length > 0 && (
        <div className="space-y-2">
          {words.map((word, idx) => (
            <p key={idx}>{word}</p>
          ))}
        </div>
      )}
      <button onClick={handleScore} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
        Calculate Score
      </button>
      {score !== null && <p className="mt-4">Score: {score}</p>}
    </div>
  );
}
