"use client";
import { useState, useEffect } from "react";
import SymbolMatchingTask from "../../../components/SymbolMatchingTask";
import PatternRecognitionTask from "../../../components/PatternRecognitionTask";

const HomePage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    // This ensures that the component only renders on the client side
    setIsMounted(true);
  }, []);

  const handleInstructionsToggle = () => {
    setShowInstructions((prev) => !prev);
  };

  if (!isMounted) {
    return <div className="container mx-auto p-5">Loading...</div>; // Server-rendered fallback
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-white text-black">
      <div className="container mx-auto p-5 text-center">
        <h1 className="text-4xl font-bold mb-6">Dyslexia Cognitive Processing Test</h1>

        {/* Instructions Button */}
        <button
          onClick={handleInstructionsToggle}
          className="bg-teal-500 text-white p-3 rounded-md hover:bg-teal-600 transition-all duration-300 mb-6 mx-auto block"
        >
          How to Play
        </button>

        {/* Instructions Modal */}
        {showInstructions && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-semibold mb-4">How to Use This Assessment</h2>
              <p className="mb-4">
                This test is designed to assess cognitive processing abilities related to dyslexia. The assessment consists of various tasks, each testing a different aspect of dyslexia such as:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li><strong>Symbol Matching:</strong> Match the symbols presented in the question to the correct options.</li>
                <li><strong>Pattern Recognition:</strong> Identify patterns in a sequence of symbols or numbers.</li>
              </ul>
              <p className="mb-4">
                Follow the instructions on each screen to complete the tasks. You will be presented with a question and multiple choice options. You need to select the correct answer based on your judgment.
              </p>
              <p className="mb-4">
                You can use the following options during the test:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li><strong>Skip Question:</strong> If you're unsure about an answer, you can skip the question and move to the next one.</li>
                <li><strong>Reset Test:</strong> You can reset the entire test at any time to start over from the first question.</li>
                <li><strong>Submit Results:</strong> After completing all tasks, your results will be shown based on your answers.</li>
              </ul>
              <p className="mb-4">
                Take your time to understand the tasks, and remember, the goal is to assess your cognitive abilities. There are no right or wrong answers, just do your best.
              </p>
              <button
                onClick={handleInstructionsToggle}
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-all duration-300 mt-4 w-full"
              >
                Close Instructions
              </button>
            </div>
          </div>
        )}

        {/* Tasks */}
        <div className="mt-8">
          <SymbolMatchingTask />
          <PatternRecognitionTask />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
