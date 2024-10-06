import React from 'react';
import Footer from '../../components/Footer';

const Dysgraphia = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold mb-4">Dysgraphia Dashboard</h1>
                <ul className="list-disc list-inside text-gray-700 text-lg text-left">
                    <li>Poor handwriting and inconsistent spacing</li>
                    <li>Trouble organizing thoughts on paper</li>
                    <li>Difficulty with grammar and punctuation</li>
                    <li>Slow writing speed</li>
                    <li>Struggles with writing tasks and assignments</li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Dysgraphia;
