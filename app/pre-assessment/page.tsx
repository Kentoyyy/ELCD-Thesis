"use client";
import React, { useState } from "react";

const PreAssessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  const questions = [
    "Does your child have difficulty recognizing letters or words?",
    "Does your child struggle to form letters or write legibly?",
    "Does your child find it challenging to understand or solve basic math problems?",
  ];

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-lg w-full p-8">
        {!completed ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Quick Pre-Assessment
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Answer a few quick questions to help us understand your child's
              learning needs.
            </p>
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                {questions[currentQuestion]}
              </h3>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => handleAnswer("Yes")}
                  className="px-6 py-2 bg-primary-color text-white rounded-lg hover:bg-opacity-90 transition"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer("No")}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                >
                  No
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Thank You for Completing the Assessment!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Based on your responses, we'll provide tailored recommendations to
              support your child.
            </p>
            <button
              className="px-6 py-3 bg-primary-color text-white rounded-lg hover:bg-opacity-90 transition"
              onClick={() => alert("Redirecting to tailored resources...")}
            >
              View Recommendations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreAssessment;
