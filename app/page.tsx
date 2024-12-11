// app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import data from '../public/images/data.png';
import model from '../public/images/modeltraning.png';
import time from '../public/images/realtime.png';
import ai from '../public/images/mattersimage.png';
import feature from '../public/images/fetaureimage2.jpg';
import feature1 from '../public/images/featureimage.jpg';
import feature3 from '../public/images/featureimage3.jpg';
import feature4 from '../public/images/featureimage4.jpg';
import feature5 from '../public/images/featureimage5.jpg';
import feature6 from '../public/images/featureimage6.jpg';
import welcome from '../public/images/testttt.png';
import image1 from '../public/images/1.png';
import image2 from '../public/images/2.png';
import image3 from '../public/images/3.png';
import image4 from '../public/images/4.png';
import frontpage from '../public/images/5front.png'
import cognitivepage from '../public/images/4cognitive.png'

import Footer from '../app/components/Footer';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);


  type Slide = {
    src: StaticImageData;
    alt: string;
    buttonText: string;
    buttonLink: string;
    buttonPosition: {
      left: string;
      bottom: string;
    };
  };

  const slides: Slide[] = [

    {
      src: frontpage, // replace with your image paths
      alt: 'Welcome ',
      buttonText: 'Read More',
      buttonLink: '/about',
      buttonPosition: {
        left: '47%',
        bottom: '40%',
      },
    },

    {
      src: image1, // replace with your image paths
      alt: 'Image 1',
      buttonText: 'What is Dyslexia',
      buttonLink: '/resources',
      buttonPosition: {
        left: '15%',
        bottom: '30%',
      },
    },
    {
      src: cognitivepage, // replace with your image paths
      alt: 'Image 4',
      buttonText: 'Skills & Training',
      buttonLink: '/resources',
      buttonPosition: {
        left: '58%',
        bottom: '20%',
      },
    },
    {
      src: image3, // replace with your image paths
      alt: 'Image 3',
      buttonText: 'Explore Resources',
      buttonLink: '/resources',
      buttonPosition: {
        left: '57%',
        bottom: '30%',
      },
    },
    {
      src: image2,
      alt: 'Image 2',
      buttonText: 'Learn More',
      buttonLink: '/learn-more',
      buttonPosition: {
        left: '14%',
        bottom: '20%',
      },
    },
    // Add more slides as needed
  ];

  // Automatically go to the next slide every 3 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000); // Change slide every 7 seconds

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  return (
    <>
      <main
        className="flex flex-col items-center justify-center bg-white"
        onMouseEnter={() => setIsPaused(true)}  // Pause on mouse hover
        onMouseLeave={() => setIsPaused(false)} // Resume when mouse leaves
      >
        <div className="relative w-full h-[60vh] flex items-center justify-center pt-8">
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'
                  }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  layout="fill"
                  className="object-cover"
                />

                {/* Add a unique button for each slide */}
                {index === currentSlide && (
                  <div
                    className="absolute z-30"
                    style={{
                      left: slide.buttonPosition.left,
                      bottom: slide.buttonPosition.bottom,
                    }}
                  >
                    <Link href={slide.buttonLink}>
                      <button className="bg-primary-color text-white px-6 py-3 rounded-full hover:bg-teal-600 transition">
                        {slide.buttonText}
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Slide controls */}
          <button
            onClick={prevSlide}
            className="absolute left-6 bottom-1/2 transform translate-y-1/2 z-40 text-teal-500 hover:text-teal-600 focus:outline-none text-3xl"
          >
            &#9664;
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 bottom-1/2 transform translate-y-1/2 z-40 text-teal-500 hover:text-teal-600 focus:outline-none text-3xl"
          >
            &#9654;
          </button>

          {/* Dots navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-40">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full text-sm ${currentSlide === index ? 'bg-primary-color' : 'bg-gray-400'
                  }`}
              ></div>
            ))}
          </div>
        </div>
      </main>
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
              Start Your Child's Learning Journey Today!
            </h2>
            <p className="text-lg mb-6">
              Take the first step with our free pre-assessment to better understand your child's unique needs. Join EarlyEdge and unlock their full potential with personalized learning solutions.
            </p>
            <Link href="/pre-assessment">
              <button className="px-6 py-3 bg-secondary-color text-white font-medium text-lg rounded-lg hover:bg-opacity-90 transition">
                Begin Pre-Assessment
              </button>
            </Link>
          </div>

        </div>
      </section>


      <section id="machine-learning" className="py-20 bg-[#0D7C66] text-white relative overflow-hidden h-[800px]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Transforming Early Child Education
          </h2>
          <p className="mb-12 max-w-md mx-auto text-lg text-white">
            Our machine learning system identifies learning disabilities early, analyzing key developmental indicators for timely support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{ src: data, alt: "Data Collection", title: "Data Collection", description: "Collecting comprehensive data, including behavioral observations, test scores, and developmental milestones." },
            { src: model, alt: "Model Training", title: "Model Training", description: "Training models to recognize patterns with accuracy, aiding in the identification of potential learning disabilities." },
            { src: time, alt: "Real-Time Predictions", title: "Real-Time Predictions", description: "child's progress for proactive interventions and support." }
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

      <section className="py-32 bg-gray-50 text-gray-800" id="matters">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mt-20 space-y-10 md:space-y-0">
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-64">
              <Image
                src={ai}
                alt="Why Early Detection Matters Image"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12 flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Early Detection Matters
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Early detection of learning disabilities empowers children to receive the appropriate support at the right time, ensuring they thrive academically and socially.
            </p>

            <button className="px-8 py-3 border border-primary-color text-[#0D7C66] rounded-full hover:bg-[#0D7C66] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
