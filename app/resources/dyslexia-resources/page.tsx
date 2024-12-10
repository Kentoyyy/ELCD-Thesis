import React from 'react';
import articleimage from "../../../public/images/articleimage.jpg";  // Update the image path as needed
import Footer from "../../components/Footer";

const DyslexiaResources: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Banner Section */}
      <div className="bg-primary-color shadow">
        <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3">
            <p className="text-sm text-white uppercase">Resources • Dyslexia</p>
            <h1 className="mt-2 text-4xl font-bold text-white leading-tight">
              Dyslexia Resources: Understand, Support, and Educate
            </h1>
            <p className="mt-4 text-white">
              Explore a comprehensive collection of resources to understand, support, and educate on Dyslexia.
              <br /> [December, 2024]
            </p>
          </div>
          <div className="lg:w-1/3 mt-6 lg:mt-0 flex justify-center">
            <img
              src={articleimage.src}
              alt="Dyslexia Resources"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <section id="understanding-dyslexia" className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">Understanding Dyslexia</h2>
            <p className="text-gray-600 mt-4">
              Dyslexia is a neurological condition that affects a person's ability to read, write, and spell. It's not related to intelligence, but rather to how the brain processes written and spoken language. People with dyslexia may struggle with decoding words, recognizing words by sight, and understanding phonemic awareness. Early identification and intervention can help mitigate challenges and provide support.
            </p>
            <h3 className="mt-6 text-xl font-semibold text-gray-700">Common Symptoms</h3>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              <li>Difficulty reading, especially with fluency and comprehension</li>
              <li>Struggles with spelling and handwriting</li>
              <li>Problems with math, especially word problems</li>
              <li>Delayed speech development</li>
            </ul>
          </section>

          <section id="dyslexia-support-tools" className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">Dyslexia Support Tools</h2>
            <p className="text-gray-600 mt-4">
              A variety of tools and technologies can help people with dyslexia improve their reading, writing, and organizational skills. These tools are designed to reduce the barriers caused by dyslexia and help individuals perform tasks more efficiently.
            </p>
            <h3 className="mt-6 text-xl font-semibold text-gray-700">Recommended Tools</h3>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              <li><strong>Text-to-Speech Software</strong> - Natural Reader, Kurzweil 3000</li>
              <li><strong>Word Prediction Tools</strong> - Ghotit Real Writer, Ginger Software</li>
              <li><strong>Speech-to-Text Software</strong> - Dragon NaturallySpeaking, Google Dictation</li>
              <li><strong>Reading Apps</strong> - Voice Dream Reader, Read&Write by Texthelp</li>
              <li><strong>Note-Taking Apps</strong> - Microsoft OneNote, Notability</li>
            </ul>
          </section>

          <section id="educational-approaches" className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-700">Educational Approaches for Dyslexia</h2>
            <p className="text-gray-600 mt-4">
              Specific teaching strategies can help students with dyslexia succeed in the classroom. These strategies often involve using multisensory learning techniques, which engage visual, auditory, and kinesthetic learning styles. Teachers are also encouraged to provide extra time for assignments and allow students to demonstrate their knowledge in alternative ways.
            </p>
          </section>

          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sources</h3>
            <ul className="list-disc list-inside text-blue-600">
              <li>
                <a href="https://www.mayoclinic.org/diseases-conditions/dyslexia/symptoms-causes/syc-20353552" target="_blank" rel="noopener noreferrer">
                  Dyslexia: Symptoms-causes
                </a>
              </li>
              <li>
                <a href="https://www.psychiatry.org/patients-families/specific-learning-disorder/what-is-specific-learning-disorder" target="_blank" rel="noopener noreferrer">
                  What is specific learning disorder
                </a>
              </li>
              <li>
                <a href="https://www.additudemag.com/what-is-dysgraphia-understanding-common-symptoms/" target="_blank" rel="noopener noreferrer">
                  Understanding common symptoms
                </a>
              </li>
              <li>
                <a href="https://online.utpb.edu/about-us/articles/education/the-three-types-of-specific-learning-disabilities-dyslexia-dysgraphia-and-dyscalculia/" target="_blank" rel="noopener noreferrer">
                  online.utpb.edu/about-us/articles
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3">
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800">Table of Contents</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#understanding-dyslexia" className="text-blue-600 hover:underline">Understanding Dyslexia</a>
              </li>
              <li>
                <a href="#dyslexia-support-tools" className="text-blue-600 hover:underline">Dyslexia Support Tools</a>
              </li>
              <li>
                <a href="#educational-approaches" className="text-blue-600 hover:underline">Educational Approaches</a>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800">Related Topics</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="flex items-center space-x-3">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Related topic"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <span className="text-gray-800 hover:underline">Understanding ADHD in Students</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3">
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Related topic"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <span className="text-gray-800 hover:underline">Inclusive Classroom Practices</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default DyslexiaResources;
