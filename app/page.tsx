// app/page.tsx
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import data from '../public/images/data.png';
import model from '../public/images/modeltraning.png';
import time from '../public/images/realtime.png';
import ai from '../public/images/mattersimage.png';
import feature from '../public/images/fetaureimage2.jpg';
import feature1 from '../public/images/featureimage.jpg';
import feature2 from '../public/images/featureimage3.jpg';
import communityimage from '../public/images/designimage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faHandsHelping, faUsers, faChartBar } from '@fortawesome/free-solid-svg-icons';
import Footer from '../app/components/Footer';
import { metadata } from '../app/metadata'; // Adjust the import path as needed

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simple slideshow data
  const slides = [
    { src: feature, alt: 'Feature 1', title: 'Lorem ipsum dolor sit amet,', description: 'Accurate detection of early learning disabilities.' },
    { src: feature1, alt: 'Feature 2', title: 'Lorem ipsum dolor sit amet,', description: 'Detailed reports with actionable feedback.' },
    { src: feature2, alt: 'Feature 3', title: 'Lorem ipsum dolor sit amet,', description: 'Immediate insights for parents and educators.' },
  ];

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 md:py-16 lg:px-16 bg-white">
        <div className="text-center max-w-lg">
          <h1 className="text-4xl md:text-5xl font-robotoserif font-extrabold text-primary-color leading-tight mb-1">
            Early Child Detection
          </h1>
          <h2 className="text-3xl md:text-4xl font-robotoserif font-extrabold text-black mb-6">
            Learning Disabilities
          </h2>
          <p className="text-gray-600 mb-8">
            Utilizing cutting-edge machine learning to identify learning disabilities early and support children’s educational journeys.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#machine-learning" className="px-6 py-2 border border-primary-color text-black font-medium rounded hover:bg-primary-color hover:text-white transition">
              Learn More
            </a>
            <button className="px-6 py-2 bg-primary-color text-white font-medium rounded hover:bg-secondary-color transition">
              Get Started
            </button>
          </div>
        </div>
      </main>

      <section id="features" className="py-20 bg-white">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
    {/* Left Side: Slideshow */}
    <div className="relative w-full md:w-1/2 h-80 bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 mb-6 md:mb-0">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
            <h3 className="text-lg font-semibold mb-1">{slide.title}</h3>
            <p className="text-xs">{slide.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Right Side: Headline and Description */}
    <div className="md:w-1/2 pl-6">
      <h2 className="text-3xl font-bold text-primary-color mb-4">Why Choose Our Platform?</h2>
      <p className="text-gray-600 text-lg mb-6">
        Our platform offers a comprehensive suite of features designed to provide real-time feedback and support for learning development. Empower educators and parents with insightful data and tailored guidance.
      </p>

      {/* Additional Info Section */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-primary-color mb-2">Key Benefits:</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Accessible resources for all learning styles</li>
          <li>Interactive tools for engaging learning experiences</li>
          <li>Comprehensive analytics for tracking progress</li>
        </ul>
      </div>

      {/* Icon Section for Features */}
      <div className="flex flex-wrap mb-6">
        <div className="flex items-center mr-4 mb-2">
          <svg className="w-6 h-6 text-primary-color mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-gray-600">Lorem ipsum dolor sit amet</span>
        </div>
        <div className="flex items-center mr-4 mb-2">
          <svg className="w-6 h-6 text-primary-color mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
          </svg>
          <span className="text-gray-600">Lorem ipsum dolor sit amet</span>
        </div>
      </div>

      {/* User Testimonials */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold text-primary-color mb-2">What Our Users Say:</h3>
        <blockquote className="text-gray-600 italic">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </blockquote>
        <p className="text-gray-600 text-right mt-2">— Happy User</p>
      </div>

      <div className="flex">
        <button onClick={prevSlide} className="mr-2 px-4 py-2 border border-primary-color text-primary-color rounded-md transition-colors duration-300 hover:bg-primary-color hover:text-white">
          Previous
        </button>
        <button onClick={nextSlide} className="px-4 py-2 border border-primary-color text-primary-color rounded-md transition-colors duration-300 hover:bg-primary-color hover:text-white">
          Next
        </button>
      </div>
    </div>
  </div>
</section>


      <section className="min-h-screen bg-white text-white flex items-center justify-center py-20" id="community-section">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Image */}
          <div className="flex justify-center items-center mb-8 md:mb-0 h-full">
            <div className="relative w-96 h-96 md:w-[40rem] md:h-[40rem] flex justify-center items-center">
              <img
                src={communityimage.src} // Replace with your image path
                alt="Community image"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
          </div>

          {/* Right Side: Text and Button */}
          <div className="text-center md:text-left md:pl-16">
            <h2 className="text-3xl font-semibold mb-4 text-gray-700">
              We’re building a community where all people who learn and think differently can feel supported.
            </h2>
            <p className="text-md text-gray-600 mb-8">
              Our free resources give people the tools they need to thrive — while helping them understand they’re not alone.
            </p>
            <button className="px-8 py-3 border border-primary-color text-gray-700 rounded-full hover:bg-secondary-color hover:text-[#0A0F29] transition">
              View our annual report
            </button>
          </div>
        </div>
      </section>

      {/* Machine Learning Section */}
      <section id="machine-learning" className="py-20 bg-[#0D7C66] text-white relative overflow-hidden h-[800px]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Transforming Early Child Education
          </h2>
          <p className="mb-12 max-w-md mx-auto text-lg text-white">
            Our machine learning system identifies learning disabilities early, analyzing key developmental indicators for timely support.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                src: data,
                alt: "Data Collection",
                title: "Data Collection",
                description: "Collecting comprehensive data, including behavioral observations, test scores, and developmental milestones."
              },
              {
                src: model,
                alt: "Model Training",
                title: "Model Training",
                description: "Training models to recognize patterns with high accuracy, aiding in the identification of potential learning disabilities."
              },
              {
                src: time,
                alt: "Real-Time Predictions",
                title: "Real-Time Predictions",
                description: "Providing real-time insights into a child's progress for proactive interventions and support."
              }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  width={120}
                  height={120}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Early Detection Matters Section */}
      <section className="py-32 bg-gray-50 text-gray-800" id="matters">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mt-20 space-y-10 md:space-y-0">
          {/* Illustration Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-64">
              <Image
                src={ai}
                alt="Illustration of early detection"
                layout="fill"
                objectFit="contain"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Benefits Section */}
          <div className="md:w-1/2 md:pl-12 text-left">
            <h2 className="text-4xl font-bold mb-6 text-primary-color leading-snug font-title">
              Early Detection Matters
            </h2>
            <p className="mb-8 text-md md:text-lg text-gray-600 leading-relaxed">
              Early identification of learning disabilities plays a crucial role in a child’s development. Our system empowers parents and educators with the tools to detect and address potential challenges before they impact learning, ensuring timely and effective intervention.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Early Intervention",
                  description: "Address challenges early to improve long-term outcomes.",
                  icon: faLightbulb
                },
                {
                  title: "Personalized Support",
                  description: "Tailor strategies to each child’s unique needs.",
                  icon: faHandsHelping
                },
                {
                  title: "Supportive Environment",
                  description: "Foster a supportive and understanding environment.",
                  icon: faUsers
                },
                {
                  title: "Data-Driven Insights",
                  description: "Utilize data to improve educational strategies.",
                  icon: faChartBar
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 p-2 bg-indigo-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={benefit.icon} className="text-primary-color w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-gray-500">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
