"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const PreAssessment: React.FC = () => {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);
  const [showModal, setShowModal] = useState(true); // State for modal visibility

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

  useEffect(() => {
    if (sessionStatus === "unauthenticated") {
      router.replace("/login");
    }
  }, [sessionStatus, router]);

  if (sessionStatus === "loading") {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 py-16 relative z-10">
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-lg w-full text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer</h2>
              <p className="text-gray-600 mb-6">
                This assessment is for informational purposes only and does not replace professional advice or diagnosis. All questions have been carefully crafted by educational professionals to help identify key areas where support may be needed. By proceeding, you agree that you understand and accept this disclaimer.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
              >
                I Agree
              </button>
            </div>
          </div>
        )}

        {!showModal && (
          <div className="lg:w-1/2 mx-auto text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Quick Pre-Assessment</h1>
            <p className="text-lg text-gray-600 mb-6">
              This brief assessment identifies areas where your child might need support in reading, writing, or math. Answering these simple Yes/No questions will help us provide better insights into their learning needs.
            </p>
            <p className="text-sm text-gray-500 italic">
              Disclaimer: This assessment is for informational purposes only and does not replace professional advice or diagnosis.
            </p>
          </div>
        )}

        {!showModal && (
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 relative">
            {!completed ? (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Question {currentQuestion + 1} of {questions.length}
                </h2>
                <p className="text-lg text-gray-700 mb-8">{questions[currentQuestion]}</p>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleAnswer("Yes")}
                    className="w-full px-6 py-3 text-white bg-green-600 rounded-md hover:bg-green-500 transition"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleAnswer("No")}
                    className="w-full px-6 py-3 text-gray-800 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                  >
                    No
                  </button>
                </div>
                <div className="mt-6">
                  <progress
                    value={currentQuestion + 1}
                    max={questions.length}
                    className="w-full h-2 rounded-full overflow-hidden bg-gray-200"
                  >
                    <div
                      className="h-full bg-green-500 transition-all"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </progress>
                </div>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Thank You!</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Based on your responses, we've generated tailored recommendations to support your child's learning journey.
                </p>
                <Link href="/recommendations">
                  <button className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition">
                    View Recommendations
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}

        {!showModal && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg shadow p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Learning Insights</h3>
              <p className="text-gray-600 mb-4">
                Explore insights into your child's learning patterns and areas of improvement.
              </p>
              <Link href="pre-assessment/insights">
                <button className="px-6 py-2 bg-primary-color text-white rounded-md hover:bg-secondary-color transition">
                  Learn More
                </button>
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tailored Recommendations</h3>
              <p className="text-gray-600 mb-4">
                Receive actionable steps to help your child excel in their learning journey.
              </p>
              <Link href="pre-assessment/recommendations">
                <button className="px-6 py-2 bg-primary-color text-white rounded-md hover:bg-secondary-color transition">
                  Get Recommendations
                </button>
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Support</h3>
              <p className="text-gray-600 mb-4">
                Connect with experts for personalized advice and support.
              </p>
              <Link href="pre-assessment/support">
                <button className="px-6 py-2 bg-primary-color text-white rounded-md hover:bg-secondary-color transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreAssessment;
