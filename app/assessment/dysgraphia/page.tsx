"use client";
import React, { useState } from "react";

const Dysgraphia: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string>("");

  // Handle file selection and image preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  // Handle form submission to classify the image
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file before classifying.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Make the POST request to your backend (adjust URL if necessary)
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setPrediction(`${result.Prediction} (Confidence: ${result.Confidence.toFixed(2)})`);
      } else {
        setPrediction("Error in classification");
      }
    } catch (error) {
      console.error("Error:", error);
      setPrediction("Failed to classify image");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Dysgraphia Detection</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Classify Image
        </button>
      </form>

      {/* Image Preview Section */}
      {imagePreview && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Uploaded Image:</h2>
          <img
            src={imagePreview}
            alt="Uploaded Handwriting"
            className="max-w-sm rounded shadow-md"
          />
        </div>
      )}

      {/* Prediction Result */}
      {prediction && (
        <div className="mt-6 p-4 bg-gray-200 rounded">
          <h2 className="text-xl font-semibold">Prediction: {prediction}</h2>
        </div>
      )}
    </div>
  );
};

export default Dysgraphia;
