"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Fetch words data from the words.json file
import wordsData from "../../../data/word_attack_data.json"; // You will need to create this file.

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface SpeechRecognitionResult {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResult[][];
  type: string;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

const WordAttack = () => {
  const [entryLevel, setEntryLevel] = useState<number>(1);
  const [words, setWords] = useState<any[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [userResponses, setUserResponses] = useState<string[]>([]);
  const [isListening, setIsListening] = useState<boolean>(false);

  useEffect(() => {
    const filteredWords = wordsData.filter((word: any) => word.level === entryLevel);
    setWords(filteredWords);
    setCurrentWordIndex(0);
    setUserResponses([]);
  }, [entryLevel]);

  const handleSubmitResponse = async (response: string) => {
    setUserResponses([...userResponses, response]);
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      await submitResults();
    }
  };

  const submitResults = async () => {
    const payload = {
      userId: "test_user", // Replace with actual user ID.
      responses: userResponses,
    };
    try {
      const response = await axios.post("http://localhost:8000/api/word-attack/results", payload);
      alert(`Test Complete! Risk: ${response.data.risk}, Accuracy: ${response.data.accuracy}`);
    } catch (error) {
      console.error("Error submitting results:", error);
      alert("Failed to submit results. Please try again.");
    }
  };

  // Speech recognition functions
  const startListening = () => {
    setIsListening(true);
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    // Proper typing for event
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      handleSubmitResponse(transcript.toLowerCase() === words[currentWordIndex].word.toLowerCase() ? "correct" : "incorrect");
      setIsListening(false);
    };

    // Error handling with correct event type
    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-3/4 md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-semibold mb-4 text-center">Word Attack Test</h1>
        <div className="mb-4">
          <label className="block mb-2">Select Entry Level:</label>
          <select
            value={entryLevel}
            onChange={(e) => setEntryLevel(Number(e.target.value))}
            className="w-full p-2 border rounded"
          >
            <option value={1}>Level 1 (Grades 1-3)</option>
            <option value={2}>Level 2 (Grades 4-6)</option>
            <option value={3}>Level 3 (Advanced)</option>
          </select>
        </div>

        {currentWordIndex < words.length ? (
          <div>
            <p className="text-center mb-4">{words[currentWordIndex].word}</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleSubmitResponse("correct")}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Correct
              </button>
              <button
                onClick={() => handleSubmitResponse("incorrect")}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Incorrect
              </button>
              <button
                onClick={startListening}
                disabled={isListening}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                {isListening ? "Listening..." : "Start Speaking"}
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-green-600">Test complete! Submitting results...</p>
        )}
      </div>
    </div>
  );
};

export default WordAttack;
