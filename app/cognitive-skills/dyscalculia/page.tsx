import React from 'react';
import Footer from '../../components/Footer';

const ReadingDifficulties = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Main Section */}
            <div className="flex-grow flex flex-col items-center justify-center p-6 bg-white shadow-lg w-full max-w-5xl mx-auto mt-8 mb-16 rounded-lg">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Reading Difficulties Dashboard</h1>

                {/* Each Section as a Card */}
                {[{
                        title: "Fluency Issues",
                        imgSrc: "/images/fluency.jpg",
                        description: "Many individuals with reading difficulties experience issues with fluency, meaning they may read slowly and with little expression. This can hinder their ability to enjoy reading and engage with the material. Strategies such as repeated reading and guided practice can help improve fluency over time."
                    },
                    {
                        title: "Spelling and Writing Problems",
                        imgSrc: "/images/writing.jpg",
                        description: "Spelling difficulties often accompany reading challenges, making writing a daunting task. Students may avoid writing assignments due to anxiety over misspellings. Using tools like spell checkers and engaging in fun spelling games can boost confidence and improve writing skills."
                    },
                    {
                        title: "Word Recognition Challenges",
                        imgSrc: "/images/word-recognition.jpg",
                        description: "Struggling with word recognition can slow down reading significantly, as individuals may need to sound out familiar words. Techniques such as flashcards and sight word games can be beneficial for improving recognition skills."
                    },
                    {
                        title: "Slow Reading Speed",
                        imgSrc: "/images/slow-reading.jpg",
                        description: "A slower reading pace can affect academic performance, as students may struggle to complete assignments on time. Incorporating timed reading exercises can help improve speed and build confidence in their abilities."
                    },
                    {
                        title: "Comprehension Difficulties",
                        imgSrc: "/images/comprehension.jpg",
                        description: "Comprehension issues mean that even if a person can read the words, they may not fully grasp the meaning. Using graphic organizers and summarizing techniques can help reinforce understanding and retention of information."
                    }
                ].map(({ title, imgSrc, description }) => (
                    <section key={title} className="bg-gray-100 mb-10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h2>
                        <img src={imgSrc} alt={title} className="mb-6 rounded-lg w-full h-64 object-cover hover:scale-105 transform transition-transform duration-300" />
                        <p className="text-gray-700 text-lg">{description}</p>
                    </section>
                ))}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ReadingDifficulties;
