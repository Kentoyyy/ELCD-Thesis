"use client";
import React, { useState } from "react";
import Link from "next/link";

const PreAssessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  const questions = [
    "Does your child have difficulty recognizing letters or words?",
    "Does your child struggle to form letters or write legibly?",
    "Does your child find it challenging to understand or solve basic math problems?",
    "Does your child often confuse similar-looking letters or numbers?",
    "Does your child avoid activities involving reading, writing, or math?",
    "Does your child find it hard to stay focused during reading or writing tasks?",
    "Does your child struggle to express thoughts in writing?",
    "Does your child frequently mispronounce words or struggle with phonics?",
    "Does your child forget newly learned words quickly?",
    "Does your child reverse letters or numbers when writing?",
    "Does your child show signs of frustration or low confidence during learning activities?",
    "Does your child have difficulty following multi-step instructions?",
    "Does your child avoid participating in group learning activities?",
    "Does your child take significantly longer to complete homework or assignments?",
    "Does your child rely heavily on finger counting for basic math operations?",
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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      {/* Introductory Guide */}
      {!completed && currentQuestion === 0 && (
        <div className="mb-10 max-w-3xl text-center">
          <h1 className="text-4xl font-semibold text-primary-color mb-4 font-title">
            Why Pre-Assessment?
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            This pre-assessment helps us understand your child's learning strengths and challenges. By answering a few questions, you'll assist us in creating a tailored plan to support their growth. Let's get started on the journey toward unlocking your child's full potential!
          </p>
        
        </div>
      )}

      {/* Main Assessment Container */}
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6">
        {!completed ? (
          <>
            <h2 className="text-2xl font-semibold text-primary-color mb-6 text-center">
              Quick Pre-Assessment
            </h2>
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                {questions[currentQuestion]}
              </h3>
              <div className="flex justify-center gap-6 mb-6">
                <button
                  onClick={() => handleAnswer("Yes")}
                  className="px-6 py-3 bg-primary-color text-white text-sm font-medium rounded-md hover:bg-secondary-color transition"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer("No")}
                  className="px-6 py-3 bg-gray-300 text-gray-800 text-sm font-medium rounded-md hover:bg-gray-400 transition"
                >
                  No
                </button>
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-500 text-center">
              Question {currentQuestion + 1} of {questions.length}
            </div>
            <div className="mt-4 mb-8">
              <progress
                value={currentQuestion + 1}
                max={questions.length}
                className="w-full"
              />
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
              Thank You for Completing the Assessment!
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Based on your responses, we’ve generated tailored recommendations to support your child’s learning. These recommendations will help us work together to foster growth in specific areas.
            </p>
            <Link href="/recommendations">
              <button className="px-6 py-3 bg-indigo-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-indigo-500 transition">
                View Recommendations
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Additional Section with Learning Insights */}
      {completed && (
        <div className="max-w-3xl text-center mt-10">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
            Next Steps
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Now that we've gathered some insights, it’s time to dive deeper into understanding how we can support your child’s learning journey. Click below to explore more resources.
          </p>
          <Link href="/resources">
            <button className="px-6 py-3 bg-green-600 text-white font-medium text-lg rounded-lg shadow-md hover:bg-green-500 transition">
              Explore Learning Resources
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PreAssessment;
