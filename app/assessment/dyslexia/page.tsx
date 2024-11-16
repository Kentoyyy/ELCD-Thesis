import { useState } from "react";

const Dyslexia = () => {
  const [spellingAccuracy, setSpellingAccuracy] = useState<number>(0);
  const [grammaticalAccuracy, setGrammaticalAccuracy] = useState<number>(0);
  const [percentageOfCorrections, setPercentageOfCorrections] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          spelling_accuracy: spellingAccuracy,
          grammatical_accuracy: grammaticalAccuracy,
          percentage_of_corrections: percentageOfCorrections,
        }),
      });

      const data = await response.json();
      setResult(data.prediction);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error occurred while predicting.");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-xl text-center font-bold text-gray-800 mb-6">Assessments Dyslexia</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600">Spelling Accuracy (%)</label>
          <input
            type="number"
            value={spellingAccuracy}
            onChange={(e) => setSpellingAccuracy(Number(e.target.value))}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-gray-600">Grammatical Accuracy (%)</label>
          <input
            type="number"
            value={grammaticalAccuracy}
            onChange={(e) => setGrammaticalAccuracy(Number(e.target.value))}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block text-gray-600">Percentage of Corrections (%)</label>
          <input
            type="number"
            value={percentageOfCorrections}
            onChange={(e) => setPercentageOfCorrections(Number(e.target.value))}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      {result && <p className="mt-4 text-gray-800">{result}</p>}
    </div>
  );
};

export default Dyslexia;
