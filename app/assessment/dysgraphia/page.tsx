"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react"; // Import useSession from next-auth

const Dysgraphia: React.FC = () => {
  const { data: session } = useSession(); // Get session data
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file before classifying.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setPrediction(
          `${result.Prediction} (Confidence: ${result.Confidence.toFixed(2)}, Severity: ${result.Severity})`
        );

        // Save the test result to the user's profile
        await fetch("/api/dysgraphia-test", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: session?.user?.id,
            prediction: result.Prediction,
            confidence: result.Confidence,
            severity: result.Severity,
          }),
        });
      } else {
        setPrediction("Error in classification");
      }
    } catch (error) {
      console.error("Error:", error);
      setPrediction("Failed to classify image");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Billboard Section */}
      <div className="relative bg-[url('/images/dysgraphiaimg.jpg')] bg-cover bg-center text-white p-10 lg:p-16 text-center min-h-[600px] max-h-[600px]">
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Optional overlay */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold">Dysgraphia Detection & Support</h1>
          <p className="mt-4 text-lg">
            Early detection using AI for better outcomes in learning disabilities.
          </p>
          
        </div>
      </div>

      {/* Upload & Prediction Section */}
      <div className="max-w-7xl mx-auto p-8 grid lg:grid-cols-2 gap-8">
        {/* Upload Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Upload Handwriting for Analysis</h2>
          <input type="file" onChange={handleFileChange} className="mb-4" />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
            Analyze
          </button>
        </form>

        {/* Prediction Results */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Results:</h2>
          {imagePreview && <img src={imagePreview} className="mt-4 rounded-lg shadow" />}
          {prediction && <p className="mt-4">{prediction}</p>}
        </div>
      </div>
    </div>
  );
};

export default Dysgraphia;