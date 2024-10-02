"use client";

import { useState } from "react";

const DyslexiaTestPage = () => {
  const [responses, setResponses] = useState<string[]>(["", "", ""]);
  const [result, setResult] = useState<string | null>(null);

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const newResponses = [...responses];
    newResponses[index] = event.target.value;
    setResponses(newResponses);
  };

  const submitTest = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/dyslexia-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ responses }),
      });
      
      
  
      if (!res.ok) {
        throw new Error("Failed to fetch from API");
      }
  
      const data = await res.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error submitting test:", error);
      setResult("Error occurred. Please try again.");
    }
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-[#0D7C66] mb-6">Dyslexia Test</h1>
        <p className="text-gray-600 text-center mb-6">Enter the correct word for the given tasks:</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Word 1:</label>
            <input
              type="text"
              value={responses[0]}
              onChange={(e) => handleInputChange(0, e)}
              className="w-full px-4 py-2 border bg-transparent rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C66]"
              placeholder="Type here..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Word 2:</label>
            <input
              type="text"
              value={responses[1]}
              onChange={(e) => handleInputChange(1, e)}
              className="w-full px-4 py-2 border bg-transparent rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C66]"
              placeholder="Type here..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Word 3:</label>
            <input
              type="text"
              value={responses[2]}
              onChange={(e) => handleInputChange(2, e)}
              className="w-full px-4 py-2 border bg-transparent rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0D7C66]"
              placeholder="Type here..."
            />
          </div>
        </div>

        <button
          onClick={submitTest}
          className="mt-6 w-full bg-[#0D7C66] text-white py-2 px-4 rounded-md font-medium hover:bg-[#095946] transition duration-300"
        >
          Submit
        </button>

        {result && (
          <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-md text-center">
            <p>Test Result: {result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DyslexiaTestPage;
