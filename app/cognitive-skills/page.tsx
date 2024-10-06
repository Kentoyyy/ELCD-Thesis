import Link from 'next/link';
import React from 'react';
import Footer from '../../app/components/Footer';

const Page = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Cognitive Skills - Learning Disabilities</h1>
                <p className="text-lg text-gray-600 mb-8 text-center">Understanding and supporting learning disabilities for improved cognitive health.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 lg:w-3/4">

                    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
                        <img className="w-24 h-24 mb-4" src="/path-to-your-dyslexia-image.png" alt="Dyslexia" />
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Dyslexia</h2>
                        <p className="text-gray-700 text-center mb-4">A specific learning disability in reading that affects the ability to recognize and decode words fluently.</p>
                        <Link href="/cognitive-skills/dyslexia" className="text-blue-600 font-semibold hover:underline">Learn More</Link>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
                        <img className="w-24 h-24 mb-4" src="/path-to-your-dysgraphia-image.png" alt="Dysgraphia" />
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Dysgraphia</h2>
                        <p className="text-gray-700 text-center mb-4">A learning disability affecting writing abilities, manifesting as difficulties with spelling and handwriting.</p>
                        <Link href="/cognitive-skills/dysgraphia" className="text-blue-600 font-semibold hover:underline">Learn More</Link>
                    </div>

                    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
                        <img className="w-24 h-24 mb-4" src="/path-to-your-dyscalculia-image.png" alt="Dyscalculia" />
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Dyscalculia</h2>
                        <p className="text-gray-700 text-center mb-4">A learning disability affecting a person's ability to understand numbers and learn math facts.</p>
                        <Link href="/cognitive-skills/dyscalculia" className="text-blue-600 font-semibold hover:underline">Learn More</Link>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Page;
