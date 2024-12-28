import { useState } from "react";

const PatternRecognitionTask = () => {
  const patterns = [
    { id: 1, pattern: "🔵 🔴 🟢", next: "🟠" },
    { id: 2, pattern: "🔵 🔴 🔵 🟠", next: "🟢" },
    { id: 3, pattern: "🟡 🟢 🟠", next: "🔴" },
  ];

  const [selectedPattern, setSelectedPattern] = useState<any>(null);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const checkAnswer = () => {
    if (userAnswer === selectedPattern?.next) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];

  return (
    <div className="p-5 mb-8">
      <h2 className="text-xl font-bold mb-4">Pattern Recognition Task</h2>
      <div className="mb-4">
        <p>{randomPattern.pattern}</p>
        <label htmlFor="answer" className="block mt-2">What comes next?</label>
        <input
          type="text"
          id="answer"
          value={userAnswer || ""}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="border p-2 rounded-md"
        />
      </div>
      <button
        onClick={checkAnswer}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Check Answer
      </button>
      {isCorrect !== null && (
        <div className={`mt-2 ${isCorrect ? "text-green-500" : "text-red-500"}`}>
          {isCorrect ? "Correct!" : "Incorrect. Try again!"}
        </div>
      )}
    </div>
  );
};

export default PatternRecognitionTask;
