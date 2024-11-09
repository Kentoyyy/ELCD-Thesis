// app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

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
import image1 from '../public/images/1.png';
import image2 from '../public/images/2.png';
import image3 from '../public/images/3.png';

import Footer from '../app/components/Footer';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);


  type Slide = {
    src: StaticImageData;
    alt: string;
  };

  const slides: Slide[] = [


    {
      src: image1,
      alt: 'Image 6',
    },
    {
      src: image2,
      alt: 'Image 8',
    },
    {
      src: image3,
      alt: 'Image 8',
    },
  ];
  // Automatically go to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center bg-white">
        <div className="relative w-full h-[60vh] flex items-center justify-center">
          <div className="relative w-full h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={slide.src}  // Pass slide.src here
                  alt={slide.alt}   // Pass slide.alt here
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-6 bottom-1/2 transform translate-y-1/2 z-10 text-teal-500 hover:text-teal-600 focus:outline-none text-3xl"
          >
            &#9664;
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 bottom-1/2 transform translate-y-1/2 z-10 text-teal-500 hover:text-teal-600 focus:outline-none text-3xl"
          >
            &#9654;
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-primary-color' : 'bg-teal-900'}`}
              ></div>
            ))}
          </div>
        </div>
      </main>


      <section id="features" className="py-20 bg-white">

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
            { src: model, alt: "Model Training", title: "Model Training", description: "Training models to recognize patterns with high accuracy, aiding in the identification of potential learning disabilities." },
            { src: time, alt: "Real-Time Predictions", title: "Real-Time Predictions", description: "Providing real-time insights into a child's progress for proactive interventions and support." }
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
