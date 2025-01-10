// components/WordAttack.js
"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const WordAttack = () => {
  const [recordedAudio, setRecordedAudio] = useState<Blob | null>(null);
  const [recognizedWord, setRecognizedWord] = useState<string>("");
  const [predictedClass, setPredictedClass] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [wordToRead, setWordToRead] = useState<string>("");
  const [wordList, setWordList] = useState<string[]>([]);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  // Fetch words from API
  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await axios.get("/api/words");
        setWordList(response.data.data);
      } catch (err) {
        console.error("Error loading words from API:", err);
        setError("Failed to load words. Please try again later.");
      }
    };

    fetchWords();
  }, []);

  const selectRandomWord = () => {
    if (wordList.length === 0) {
      setError("No words available to select.");
      return;
    }
    const randomIndex = Math.floor(Math.random() * wordList.length);
    setWordToRead(wordList[randomIndex]);
  };

  const startRecording = async () => {
    try {
      setIsRecording(true);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const audioChunks: Blob[] = [];
      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        setRecordedAudio(audioBlob);
        setIsRecording(false);
      };

      mediaRecorder.start();
    } catch (err) {
      setError("Unable to access microphone. Please check your permissions.");
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current = null;
    }
  };

  const handleSubmit = async () => {
    if (!recordedAudio) {
      setError("Please record your voice first.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("audio", recordedAudio);
      formData.append("word", wordToRead);

      const response = await axios.post("/api/word-attack/speech", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setRecognizedWord(response.data.recognized_word);
      setPredictedClass(response.data.predicted_class);
    } catch (err: any) {
      setError(err?.response?.data?.detail || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">Word Attack Detection</h1>

        <div className="mb-4">
          {wordToRead ? (
            <p className="text-center text-lg font-medium text-gray-700">
              Read this word aloud: <span className="text-blue-600 font-semibold">{wordToRead}</span>
            </p>
          ) : (
            <button
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
              onClick={selectRandomWord}
            >
              Get a Word to Read
            </button>
          )}
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <button
            className={`w-full py-2 px-4 rounded-lg focus:outline-none ${isRecording ? "bg-red-500 hover:bg-red-600 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isLoading || !wordToRead}
          >
            {isRecording ? "Stop Recording" : "Start Recording"}
          </button>
        </div>

        <button
          className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none disabled:opacity-50"
          onClick={handleSubmit}
          disabled={isLoading || !recordedAudio}
        >
          {isLoading ? "Processing..." : "Submit"}
        </button>

        {error && <div className="mt-4 text-red-500 text-center">{error}</div>}

        {recognizedWord && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Recognition Result</h3>
            <p className="mt-2 text-gray-600">Recognized Word: {recognizedWord}</p>
            <p className="mt-1 text-gray-600">Predicted Class: {predictedClass !== null ? predictedClass : "No prediction yet"}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WordAttack;
