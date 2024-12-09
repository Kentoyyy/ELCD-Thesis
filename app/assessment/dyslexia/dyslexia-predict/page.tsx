"use client";
import { useState } from 'react';
import axios from 'axios';

export default function UploadHandwriting() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('http://localhost:8000/upload-handwriting/', formData);
      setResult(res.data.message || 'File uploaded successfully!');
    } catch (err) {
      setResult('Error uploading file.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Upload Handwriting</h1>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
      {result && <p className="mt-4 text-center">{result}</p>}
    </div>
  );
}
