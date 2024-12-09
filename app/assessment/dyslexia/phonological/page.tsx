"use client";
import React, { useState } from "react";
import axios from "axios";
import questionsData from "../../../data/questions.json"; // Import the JSON data

const PhonologicalTest = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const questions = questionsData; // Use imported JSON data

  const handleAnswer = (selected: number | null) => {
    setAnswers([...answers, selected !== null ? selected : -1]); // Use -1 for skipped answers
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      submitAnswers();
    }
  };

  const submitAnswers = async () => {
    setLoading(true);
    setError(null);

    const paddedAnswers = [...answers, ...new Array(15 - answers.length).fill(-1)];

    try {
      const response = await axios.post("http://127.0.0.1:8000/predict/", {
        answers: paddedAnswers,
      });
      setResult(response.data.prediction);
    } catch (err) {
      setError("Failed to get prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const skipQuestion = () => {
    handleAnswer(null);
  };

  const resetTest = () => {
    setQuestionIndex(0);
    setAnswers([]);
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center p-6">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Phonological Awareness Test</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : result ? (
          <div className="text-center">
            <p className="text-lg font-semibold">{result}</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-center mb-4">
              {questions[questionIndex].images &&
                questions[questionIndex].images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Question image ${idx + 1}`}
                    className="w-36 h-36 object-contain"
                  />
                ))}
            </div>
            <p className="text-center text-xl mb-4">{questions[questionIndex].question}</p>
            <div className="space-y-2">
              {questions[questionIndex].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 transition"
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={skipQuestion}
                className="bg-gray-300 text-black p-2 rounded w-full hover:bg-gray-400 transition"
              >
                Skip Question
              </button>
              <button
                onClick={resetTest}
                className="bg-red-500 text-white p-2 rounded w-full hover:bg-red-600 transition"
              >
                Reset Test
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhonologicalTest;
