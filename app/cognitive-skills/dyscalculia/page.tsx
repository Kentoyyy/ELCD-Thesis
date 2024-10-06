import React from 'react';
import Footer from '../../components/Footer';

const Dyscalculia = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Dyscalculia Dashboard</h1>
                <ul className="list-disc list-inside text-gray-700 text-lg text-left">
                    <li>Difficulty with basic math concepts</li>
                    <li>Problems with number sense and counting</li>
                    <li>Challenges with memorizing math facts</li>
                    <li>Trouble with problem-solving and calculations</li>
                    <li>Difficulty understanding time and measurements</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Dyscalculia;
