import React from 'react';
import Footer from '../../components/Footer';

const Dyslexia = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Dyslexia Dashboard</h1>
                <ul className="list-disc list-inside text-gray-700 text-lg">
                    <li>Difficulty reading fluently</li>
                    <li>Problems with spelling and writing</li>
                    <li>Trouble with word recognition</li>
                    <li>Slow reading speed</li>
                    <li>Difficulty with comprehension</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Dyslexia;
