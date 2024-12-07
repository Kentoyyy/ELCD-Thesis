"use client";
import React, { useState } from "react";
import axios from "axios";

const PhonologicalTest = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]); // Store answers (0 for No, 1 for Yes)
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const questions = [
    {
      images: [
        "http://127.0.0.1:8000/images/bat.png", 
        "http://127.0.0.1:8000/images/hat.png"
      ],
      question: "Do 'bat' and 'hat' sound the same?",
      options: ["Yes", "No"],
    },
    {
      images: [
        "http://127.0.0.1:8000/images/dog.png", 
        "http://127.0.0.1:8000/images/log.png"
      ],
      question: "Which word rhymes with 'dog': 'log' or 'cat'?",
      options: ["Log", "Cat"],
    },
    {
      images: [
        "http://127.0.0.1:8000/images/sun.png", 
        "http://127.0.0.1:8000/images/moon.png"
      ],
      question: "What word do these sounds make: /s/ /u/ /n/?",
      options: ["Sun", "Moon"],
    },
  ];

  // Handle answer selection
  const handleAnswer = (selected: number) => {
    setAnswers([...answers, selected]);
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      submitAnswers();  // When all questions are answered, submit the answers
    }
  };

  // Submit answers to the backend
  const submitAnswers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://127.0.0.1:8000/predict/", {
        answers: answers, // Send the answers as an array
      });
      setResult(response.data.prediction);  // Show prediction result
    } catch (err) {
      setError("Failed to get prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Phonological Awareness Test</h1>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : result ? (
        <p className="text-lg font-bold">{result}</p>
      ) : (
        <div>
          <div className="flex justify-center space-x-4 mb-4">
            {questions[questionIndex].images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt={`Question image ${idx + 1}`}
                className="w-40 h-40 object-contain"
              />
            ))}
          </div>
          <p className="mb-4">{questions[questionIndex].question}</p>
          <div className="space-y-2">
            {questions[questionIndex].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="bg-blue-500 text-white p-2 rounded w-full"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhonologicalTest;
