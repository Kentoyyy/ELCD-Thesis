"use client";
import React from "react";
import Image from "next/image";

const PersonalizedResources: React.FC = () => {
  return (
    <div className="bg-gray-50 px-8 py-16 shadow-lg w-full">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
        Personalized Resources
      </h1>

      <p className="text-gray-600 text-lg mb-16 text-center animate-fade-in">
        Discover tailored tools and materials crafted to fit your unique learning journey, ensuring a more effective and enjoyable experience.
      </p>

      <div className="space-y-20">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Customized Learning Paths</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Personalized learning paths provide curated activities and lessons that adapt to your pace and preferences. Key highlights include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-4">
              <li>Interactive modules tailored to individual skill levels.</li>
              <li>Progress tracking to celebrate achievements and adjust goals.</li>
              <li>Engaging activities designed to maintain motivation.</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/learningpath.png"
              alt="Learning Paths"
              width={600}
              height={400}
              className="rounded-lg shadow-md animate-slide-in-right"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/resourceslibrary.png"
              alt="Resource Library"
              width={600}
              height={400}
              className="rounded-lg shadow-md animate-slide-in-left"
            />
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Extensive Resource Library</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Access a wide range of resources designed to cater to diverse needs. From foundational concepts to advanced skills, our library offers:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-4">
              <li>Guides and tutorials for step-by-step learning.</li>
              <li>Downloadable templates and worksheets for hands-on practice.</li>
              <li>Video lessons by expert educators and professionals.</li>
            </ul>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Interactive Tools</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our interactive tools foster active engagement and make learning fun and efficient. Examples include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-4">
              <li>Gamified quizzes to reinforce understanding.</li>
              <li>Virtual simulations for real-world skill applications.</li>
              <li>Dynamic visualizations for complex concepts.</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/interactive_tools.jpg"
              alt="Interactive Tools"
              width={600}
              height={400}
              className="rounded-lg shadow-md animate-slide-in-right"
            />
          </div>
        </div>

        {/* Section 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/personalized_reports.jpg"
              alt="Personalized Reports"
              width={600}
              height={400}
              className="rounded-lg shadow-md animate-slide-in-left"
            />
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Insightful Reports</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Gain valuable insights into progress and areas for improvement through comprehensive reports, featuring:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-4">
              <li>Detailed performance analytics with actionable advice.</li>
              <li>Custom recommendations based on unique learning patterns.</li>
              <li>Visual summaries for easy comprehension and goal setting.</li>
            </ul>
          </div>
        </div>

        {/* Section 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">Expert Guidance</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Connect with professionals and mentors who provide guidance tailored to your learning needs. Features include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-4">
              <li>Live sessions for real-time advice.</li>
              <li>Discussion forums to collaborate and share ideas.</li>
              <li>Exclusive webinars and workshops.</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/images/expert_guidance.jpg"
              alt="Expert Guidance"
              width={600}
              height={400}
              className="rounded-lg shadow-md animate-slide-in-right"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-24">
        <button className="px-12 py-4 bg-primary-color text-white text-xl rounded-lg shadow-lg hover:bg-blue-700 transition-all animate-bounce">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default PersonalizedResources;
