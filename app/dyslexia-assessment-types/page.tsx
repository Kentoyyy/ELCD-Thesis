"use client";
import React from "react";

const ExploreEarlyEdge = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Explore EarlyEdge
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empowering early learning through advanced tools, insights, and tailored resources designed to unlock every child’s potential.
          </p>
        </header>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Interactive Learning Tools",
              description:
                "Engage children with interactive exercises and gamified learning experiences that make education enjoyable.",
              imgSrc: "/images/interactive_learning.png",
            },
            {
              title: "Progress Tracking",
              description:
                "Track your child’s progress with detailed analytics and reports that help identify strengths and areas for improvement.",
              imgSrc: "/images/progress_tracking.png",
            },
            {
              title: "Personalized Resources",
              description:
                "Access curated resources tailored to your child’s learning style and specific needs.",
              imgSrc: "/images/personalized_resources.png",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6"
            >
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-32 h-32 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary-color text-white rounded-lg p-10 mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Unlock Your Child's Potential?
          </h2>
          <p className="text-lg mb-6">
            Join EarlyEdge today and discover how our innovative platform can
            transform learning for the next generation.
          </p>
          <button className="px-6 py-3 bg-secondary-color text-white font-medium text-lg rounded-lg hover:bg-opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreEarlyEdge;
