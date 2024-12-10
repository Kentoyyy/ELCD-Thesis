import React from "react";

const Recommendations = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="max-w-lg text-center bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Thank You for Completing the Assessment!
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Based on your responses, we'll provide tailored recommendations to
          support your child.
        </p>
        <button
          className="px-6 py-3 bg-primary-color text-white font-medium text-lg rounded-lg hover:bg-opacity-90 transition"
          onClick={() => alert("Viewing recommendations coming soon!")}
        >
          View Recommendations
        </button>
      </div>
    </section>
  );
};

export default Recommendations;
