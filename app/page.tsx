// app/page.tsx
import React from 'react';

import Image from 'next/image';
import data from '../public/images/data.png';
import model from '../public/images/modeltraning.png';
import time from '../public/images/realtime.png';
import ai from '../public/images/mattersimage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faHandsHelping, faUsers, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { Metadata } from 'next';
import Footer from '../app/components/Footer';
export const metadata: Metadata = {
  title: "EarlyEdge - Home",
  icons: {
    icon: '/images/elcdfav.png',
  },
};

export default function Home() {
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
                description:
                  "Collecting comprehensive data, including behavioral observations, test scores, and developmental milestones.",
              },
              {
                src: model,
                alt: "Model Training",
                title: "Model Training",
                description:
                  "Training models to recognize patterns with high accuracy, aiding in the identification of potential learning disabilities.",
              },
              {
                src: time,
                alt: "Real-Time Predictions",
                title: "Real-Time Predictions",
                description:
                  "Providing real-time insights into a child's progress for proactive interventions and support.",
              },
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
                  icon: faLightbulb,
                },
                {
                  title: "Personalized Support",
                  description: "Tailor strategies to each child’s unique needs.",
                  icon: faHandsHelping,
                },
                {
                  title: "Supportive Environment",
                  description: "Foster a supportive and understanding environment.",
                  icon: faUsers,
                },
                {
                  title: "Data-Driven Insights",
                  description: "Utilize data to improve educational strategies.",
                  icon: faChartBar,
                },
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 p-2 bg-indigo-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={benefit.icon} className="text-primary-color w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-color">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call-to-action button */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-primary-color text-white py-2 px-6 rounded-lg shadow-lg hover:bg-secondary-color transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer /> {/* Footer at the bottom */}

    
    </>
  );
}
