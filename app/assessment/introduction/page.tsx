import React from 'react';
import Link from 'next/link';

const IntroductionDyslexiaScreening = () => {

    return (
        <div className="font-sans">
            {/* Hero Section */}
            <section
                className="relative min-h-[80vh] flex items-center justify-center bg-blue-50 px-6"
                style={{
                    backgroundImage: "url('/images/dyslexiaintroduction.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="relative max-w-3xl mx-auto text-center text-white p-8">
                    <h1 className="text-4xl font-bold">Dyslexia Screening Guide</h1>
                    <p className="mt-4 leading-relaxed text-lg">
                        Identify dyslexia early with our comprehensive screening tools. Tailor support to improve learning outcomes and empower confidence.
                    </p>
                    <Link
                        href="/assessment/dyslexia"
                        className="mt-6 inline-block px-6 py-3 bg-primary-color text-white text-lg font-medium rounded shadow hover:bg-secondary-color"
                    >
                        Start Screening
                    </Link>
                </div>
            </section>


            {/* Importance Section */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary-color">Why Dyslexia Screening Matters</h2>
                    <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                        Screening provides critical insights to help identify early signs of dyslexia. By acting early, you can provide targeted interventions and tools that foster academic success and personal growth.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary-color">How Screening Works</h2>
                    <p className="mt-4 text-gray-700 text-lg">
                        Learn how each step—from early detection to personalized assessments—can make a lasting impact in identifying and managing dyslexia effectively.
                    </p>
                    <div className="mt-8">
                        <video
                            width="560"
                            height="315"
                            controls
                            className="mx-auto rounded-lg shadow-lg">
                            <source src="/videos/screeningdyslexia.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="mt-4 text-sm text-gray-600">
                            <span className="font-semibold">CCTO - Peekaboo Kidz
                            </span> —
                            <a
                                href="https://www.youtube.com/watch?v=65psPXWzNic"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline">
                                View Original Source
                            </a>
                        </p>
                    </div>
                </div>
            </section>



            {/* Screening Guidelines */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-primary-color">Screening Guidelines</h2>
                    <p className="mt-4 text-gray-600 text-center text-lg">
                        Follow these structured steps to guide children through dyslexia detection:
                    </p>

                    {/* Steps with GIFs */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-12">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="/images/struggle.gif"
                                alt="Identify Struggles"
                                className="w-64 h-64 mb-4 rounded-lg shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-primary-color">Step 1: Identify Struggles</h3>
                            <p className="mt-2 text-gray-600 text-base">
                                Detect early signs such as slow word recognition, reading errors, or difficulty spelling and writing.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="/images/assessment.gif"
                                alt="Run Assessments"
                                className="w-64 h-64 mb-4 rounded-lg shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-primary-color">Step 2: Run Assessments</h3>
                            <p className="mt-2 text-gray-600 text-base">
                                Conduct detailed tests to evaluate reading fluency, comprehension, and phonemic awareness.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="/images/finish.gif"
                                alt="Personalized Support"
                                className="w-64 h-64 mb-4 rounded-lg shadow-lg"
                            />
                            <h3 className="text-xl font-semibold text-primary-color">Step 3: Personalized Support</h3>
                            <p className="mt-2 text-gray-600 text-base">
                                Direct the child to tailored reading interventions, therapies, or resources that meet their needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Benefits Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary-color">The Benefits of Early Screening</h2>
                    <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                        Early screening allows children to overcome challenges and thrive academically and socially by receiving timely interventions.
                    </p>

                    {/* Added Image */}
                    <div className="mt-8 flex justify-center">
                        <img
                            src="/images/screening.png"
                            alt="Early Screening Benefits"

                        />
                    </div>

                    {/* Additional Sentences */}
                    <div className="mt-6 text-gray-700 leading-relaxed text-lg">
                        <p>
                            By identifying learning difficulties early, children can receive customized support tailored to their unique needs. Early intervention
                            significantly boosts self-confidence and helps children achieve their full potential.
                        </p>
                        <p className="mt-4">
                            Screening is a small step that leads to a brighter, more inclusive future for children with dyslexia.
                        </p>
                    </div>
                </div>
            </section>


            {/* Facts Section */}
            <section className="py-16 bg-blue-50 text-gray-800">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-blue-900">Key Facts About Dyslexia</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Learn more about the common signs and how early detection can make a difference.
                        </p>
                    </div>

                    {/* Minimalist Facts Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Fact 1 */}
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-700">1 in 5 Children</h3>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Approximately 1 in 5 children show signs of dyslexia, making it one of the most common learning challenges.
                            </p>
                        </div>

                        {/* Fact 2 */}
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-700">Early Detection</h3>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Early diagnosis can significantly improve a child’s academic performance and confidence.
                            </p>
                        </div>

                        {/* Fact 3 */}
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-700">Tailored Support</h3>
                            <p className="mt-2 text-gray-600 leading-relaxed">
                                Individualized teaching strategies can help children overcome dyslexia and thrive in their learning journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default IntroductionDyslexiaScreening;
