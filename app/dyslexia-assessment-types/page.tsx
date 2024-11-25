import React from 'react';

const DyslexiaTypes = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">Understanding Pronunciation and Dictation</h1>
                <p className="text-gray-600 text-lg text-center mb-16">
                    Dive into the complexities of dyslexia and its relation to pronunciation, spelling, and phonetics. Our analysis helps identify and address these challenges effectively.
                </p>

                {/* Animated Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-medium text-gray-800 text-center mb-6">
                        Dyslexia in Action
                    </h2>
                    <div className="flex justify-center items-center">
                        {/* HTML5 Video Component */}
                        <video
                            className="rounded-lg shadow-lg w-full max-w-3xl"
                            autoPlay
                            loop
                            muted
                            controls
                            src="/videos/dyslexia_action.mp4"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <p className="text-gray-600 text-center mt-4">
                        Watch how dyslexia affects the decoding of language in real-time scenarios.
                    </p>

                    {/* CTTO Section */}
                    <div className="mt-6 text-center text-gray-500">
                        <p>
                            Video Credit: <span className="font-semibold">Moore Kingston Smith LLP</span> |
                            Source: <a href="https://www.youtube.com/watch?v=AB99_M8bBN8" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Click here for the original video</a>
                        </p>
                    </div>
                </div>


                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Reusable Content Block */}
                    {[
                        {
                            title: 'Spelling Accuracy',
                            description: 'Spelling accuracy evaluates the correct arrangement of letters in words. Dyslexia affects this by causing frequent errors like letter reversals (e.g., *b* and *d*).',
                            imgSrc: '/images/spelling.png',
                        },
                        {
                            title: 'Grammatical Accuracy',
                            description: 'Dyslexia may lead to errors in sentence structure and verb agreement. Improving grammatical accuracy requires focused training and support.',
                            imgSrc: '/images/grammatical_accuracy.jpg',
                        },
                        {
                            title: 'Phonetic Accuracy',
                            description: 'Phonetics focuses on the correct pronunciation of words. Dyslexia can result in mispronunciation and difficulty connecting sounds to letters.',
                            imgSrc: '/images/phonetic_accuracy.jpg',
                        },
                        {
                            title: 'Percentage of Corrections',
                            description: 'A high percentage of corrections highlights persistent challenges in spelling and grammar. Early detection helps mitigate these issues.',
                            imgSrc: '/images/percentage_corrections.jpg',
                        },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <img
                                src={item.imgSrc}
                                alt={item.title}
                                className="w-52 h-52 rounded-full object-cover mb-6 shadow-lg"
                            />
                            <h2 className="text-2xl font-medium text-gray-700 mb-4">{item.title}</h2>
                            <p className="text-gray-500">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Dyslexia Explanation */}
                <div className="mt-16 bg-gray-50 py-16 px-0 w-full shadow-lg">
                    <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">
                        What is Dyslexia?
                    </h2>
                    <p className="text-gray-600 text-lg text-center mb-8 max-w-3xl mx-auto">
                        Dyslexia is a learning disorder that affects reading, writing, and pronunciation. It stems from difficulty decoding language and relating sounds to letters, making it challenging for individuals to process written words.
                    </p>
                    <p className="text-gray-600 text-lg text-center mb-8 max-w-3xl mx-auto">
                        It's important to note that dyslexia is not related to intelligence or vision problems. People with dyslexia often have average or above-average intelligence and can excel with the right interventions and support. Early diagnosis and tailored strategies help children and adults manage dyslexia and lead successful lives.
                    </p>
                    <p className="text-gray-600 text-lg text-center mb-8 max-w-3xl mx-auto">
                        Common signs of dyslexia include trouble with reading fluency, difficulty with spelling and writing, and challenges in decoding unfamiliar words. But with proper educational strategies and interventions, individuals with dyslexia can overcome these challenges and thrive.
                    </p>

                    <div className="flex justify-center items-center mb-8">
                        {/* HTML5 Video Component */}
                        <video
                            className="rounded-lg shadow-lg w-full max-w-3xl"
                            autoPlay
                            loop
                            muted
                            controls
                            src="/videos/what_is_dyslexia.mp4"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto">
                        Watch how dyslexia affects the decoding of language in real-time scenarios and better understand the challenges faced by individuals with this learning difference.
                    </p>

                    {/* CTTO Section */}
                    <div className="mt-6 text-center text-gray-500">
                        <p>
                            Video Credit: <span className="font-semibold">TED-Ed</span> |
                            Source:{" "}
                            <a
                                href="https://www.youtube.com/watch?v=zafiGBrFkRM"
                                className="text-blue-500 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click here for the original video
                            </a>
                        </p>
                    </div>
                </div>




            </div>
        </section>
    );
};

export default DyslexiaTypes;
