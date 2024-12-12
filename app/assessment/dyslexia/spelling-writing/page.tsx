"use client";
import React, { useEffect, useState } from "react";

const ReadingTest = () => {
  const [cvcWords, setCvcWords] = useState<string[]>([]);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [userSpeech, setUserSpeech] = useState<string>("");
  const [result, setResult] = useState<{ message: string; accuracy: number } | null>(null);

  useEffect(() => {
    // Fetch CVC words from the backend
    const fetchWords = async () => {
      try {
        const response = await fetch("/cvc-words");
        const data = await response.json();
        setCvcWords(data.words);
        setCurrentWord(data.words[0]); // Start with the first word
      } catch (error) {
        console.error("Error fetching CVC words:", error);
      }
    };
    fetchWords();
  }, []);

  const startRecognition = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event: any) => {
      const speech = event.results[0][0].transcript;
      setUserSpeech(speech);
      analyzeSpeech(speech);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
    };
  };

  const analyzeSpeech = async (speech: string) => {
    try {
      const response = await fetch("/analyze-speech", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          word: currentWord,
          speech: speech,
        }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error analyzing speech:", error);
      setResult({ message: "Error occurred while processing speech.", accuracy: 0 });
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Reading Test</h1>

      {cvcWords.length > 0 && (
        <div className="text-lg font-medium text-blue-600">{currentWord}</div>
      )}

      <button
        onClick={startRecognition}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Start Speaking
      </button>

      {userSpeech && (
        <div className="mt-4 text-sm text-gray-700">
          You said: <span className="font-bold">{userSpeech}</span>
        </div>
      )}

      {result && (
        <div className="mt-6 text-center">
          <h2 className="text-xl font-semibold">Result</h2>
          <p>{result.message}</p>
          <p>Accuracy: {result.accuracy}%</p>
        </div>
      )}
    </div>
  );
};

export default ReadingTest;
