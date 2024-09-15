import React from 'react';

import Footer from '../components/Footer'; // Make sure the Footer component file name is capitalized
import Image from 'next/image';
import vision from '../../public/images/vision.png';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "EarlyEdge - About",
  icons: {
    icon: '/images/elcdfav.png',
  },
}

const AboutPage = () => {
  return (
    <>
     
      <div className="min-h-screen flex flex-col bg-white">
        {/* Hero Section */}
        <div className="container mx-auto py-12 px-6 lg:px-16 flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0D7C66] mb-6 leading-tight">
              Revolutionizing Early Detection in Education
            </h1>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              At EarlyEdge, we harness the power of machine learning to detect learning disabilities at an early stage, ensuring timely intervention and support to maximize every child's educational journey.
            </p>
            <a href="#learn-more" className="inline-block mt-4 px-6 py-2 bg-[#0D7C66] text-white font-medium rounded-lg hover:bg-secondary-color transition">
              Learn More
            </a>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image
                src={vision}
                alt="Vision for Early Detection"
                layout="fill"
                objectFit="contain"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 lg:px-16 text-center">
            {[
              { label: '3+ Years', value: 'of Research' },
              { label: '25+', value: 'ML Models' },
              { label: '90%+', value: 'Detection Accuracy' },
              { label: '100K+', value: 'Children Impacted' }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-[#0D7C66]">{stat.value}</h2>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Explanation Section */}
        <div id="learn-more" className="container mx-auto py-16 px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Research & Development', text: 'Our dedicated team has spent over three years researching and developing machine learning models that analyze developmental data to accurately detect learning disabilities.' },
            { title: 'Machine Learning Approach', text: 'We use advanced algorithms to process and analyze a child’s developmental patterns, allowing for early and precise identification of potential challenges.' },
            { title: 'Why It Matters', text: 'Early detection ensures that children get the help they need before their learning disabilities affect their educational performance, improving their chances for success.' },
            { title: 'Our Mission', text: 'Our mission is to empower educators and parents by providing data-driven insights, helping children overcome learning barriers and reach their full potential.' }
          ].map((section, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#0D7C66] mb-4">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
          
        {/* Call to Action */}
        
      </div>
      <Footer /> {/* Footer at the bottom */}
    </>
  );
};

export default AboutPage;
