import { useState } from 'react';
import axios from 'axios';

interface FormData {
  wordLength: number;
  numSyllables: number;
  numVowels: number;
  numConsonants: number;
}

const QuizForm = () => {
  const [formData, setFormData] = useState<FormData>({
    wordLength: 0,
    numSyllables: 0,
    numVowels: 0,
    numConsonants: 0,
  });
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/predict', formData);
      setResult(`Prediction: ${response.data.prediction}`);
    } catch (error) {
      console.error('Error submitting form:', error);
      setResult('Error occurred while predicting.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Phonological Awareness Quiz</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-2">Word Length</label>
          <input
            type="number"
            name="wordLength"
            className="border rounded-lg p-2"
            value={formData.wordLength}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Number of Syllables</label>
          <input
            type="number"
            name="numSyllables"
            className="border rounded-lg p-2"
            value={formData.numSyllables}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Number of Vowels</label>
          <input
            type="number"
            name="numVowels"
            className="border rounded-lg p-2"
            value={formData.numVowels}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Number of Consonants</label>
          <input
            type="number"
            name="numConsonants"
            className="border rounded-lg p-2"
            value={formData.numConsonants}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
      {result && <div className="mt-4 text-lg font-semibold">{result}</div>}
    </div>
  );
};

export default QuizForm;
