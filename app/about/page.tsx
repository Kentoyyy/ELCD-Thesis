import React from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Metadata } from 'next';
import fam from '../../public/images/fam.jpg';
import fam1 from '../../public/images/fam1.jpg';
export const metadata: Metadata = {
  title: "EarlyEdge - About Us",
  icons: {
    icon: '/images/elcdfav.png',
  },
};

const AboutPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Hero Section */}
        <div className="container mx-auto py-12 px-6 lg:px-16 flex flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold text-[#0D7C66] mb-6 leading-tight font-raleway">
            About EarlyEdge
          </h1>
          <p className="text-base text-gray-600 max-w-2xl leading-relaxed mb-8">
            EarlyEdge is dedicated to identifying learning disabilities in young children through the power of machine learning. Our platform provides early, accurate insights, enabling parents and educators to support each child's unique learning path from the very start.
          </p>
        </div>

        {/* Impact Section */}
        <div className="bg-primary-color py-16 text-white">
          <div className="container mx-auto text-center px-6 lg:px-16">
            <h2 className="text-xl font-semibold uppercase mb-4">Our Impact</h2>
            <h3 className="text-4xl font-bold mb-4">
              Transforming Early Detection of Learning Disabilities
            </h3>
            <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
              At EarlyEdge, we are committed to supporting children with learning disabilities by providing accessible, accurate, and compassionate early detection services. Our system utilizes advanced machine learning models to identify signs of dyslexia, dysgraphia, and dyscalculia in children between the ages of 2 and 7. Through timely diagnosis, parents and educators can work together to create tailored educational strategies, fostering a supportive environment that allows each child to thrive.
            </p>
            <button className="px-6 py-3 bg-secondary-color text-[#0D3B66] font-semibold rounded-full shadow-md hover:bg-primary-colortransition duration-300">
              Our Impact
            </button>
          </div>
        </div>

        {/* Article Section */}
        <div className="container mx-auto py-16 px-6 lg:px-16 text-gray-800">
          <h2 className="text-3xl font-semibold text-[#0D7C66] mb-8 text-center">
            Our Mission
          </h2>
          <p className="text-center text-lg italic text-[#4A4A4A] mb-10">
            "Empowering children to reach their full potential through early detection and personalized support."
          </p>
          <article className="space-y-6 leading-relaxed text-lg bg-gray-50 p-8 rounded-lg shadow-lg">
            <p>
              <span className="font-bold">EarlyEdge</span> was created to address a critical need: early intervention for learning disabilities in young children. Research has shown that early detection significantly improves a child’s educational and emotional outcomes. By identifying learning challenges at a young age, children receive the support they need before they face the academic and social pressures of formal schooling.
            </p>
            <p>
              Our platform serves as a bridge between parents, educators, and specialists. Using advanced machine learning, <span className="font-bold">EarlyEdge</span> identifies subtle patterns that may indicate potential learning disabilities, offering an objective and data-driven approach to early diagnosis. This enables parents and educators to make informed decisions and implement personalized learning plans for each child.
            </p>
            <p>
              <span className="font-bold">We empower families</span> with insights that foster collaboration between home and school, providing a unified support system for every child’s growth. By sharing results and resources, <span className="font-bold">EarlyEdge</span> becomes a trusted partner in each child’s educational journey, building a foundation for lifelong learning and confidence.
            </p>
            <p>
              For educators, <span className="font-bold">EarlyEdge</span> provides actionable data to inform classroom strategies and interventions, helping teachers better support students with diverse needs. Our vision is a world where every child, regardless of their learning challenges, is given an equal opportunity to succeed and flourish.
            </p>
            <p>
              With a commitment to <span className="font-bold">privacy, accuracy, and compassion</span>, <span className="font-bold">EarlyEdge</span> is dedicated to breaking down barriers to early detection and making advanced technology accessible to families everywhere. We believe that by supporting children from the start, we can create lasting positive impacts throughout their lives.
            </p>
          </article>

          {/* Image Section */}
          <div className="text-center mt-12">
            <img src={fam.src} alt="Our Mission Graphic" className="inline-block w-96 h-96 max-w-full" />
       
            <p className="mt-4 text-gray-600">Together, we create a future where every child thrives.</p>
          </div>
        </div>

      </div>
      <Footer /> {/* Footer component */}
    </>
  );
};

export default AboutPage;
