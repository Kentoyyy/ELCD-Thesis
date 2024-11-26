"use client";
import React, { useState } from "react";

const DyslexiaTypes = () => {
    const [activeTab, setActiveTab] = useState("about");

    const tabs = [
        { id: "about", label: "About" },
        { id: "pronunciation", label: "Pronunciation" },
        { id: "dictation", label: "Dictation" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "about":
                return (
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                            What is Dyslexia?
                        </h2>
                        <p className="text-gray-600 text-lg text-center mb-8 max-w-3xl mx-auto">
                            Dyslexia is a learning disorder that affects reading, writing, and pronunciation. It stems from difficulty decoding language and relating sounds to letters, making it challenging for individuals to process written words.
                        </p>
                        <div className="flex justify-center items-center mb-8">
                            <video
                                className="rounded-lg shadow-lg w-full max-w-3xl bg-white"
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
                            Watch how dyslexia affects the decoding of language in real-time scenarios.
                        </p>
                    </div>
                );
            case "pronunciation":
                return (
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                            Understanding Pronunciation
                        </h2>
                        <p className="text-gray-600 text-lg text-center mb-8 max-w-3xl mx-auto">
                            Dyslexia often impacts pronunciation, making it harder for individuals to connect sounds with their written counterparts. This can result in challenges like mispronunciations and difficulties in phonetic accuracy.
                        </p>
                        <div className="flex justify-center items-center mb-8">
                            <video
                                className="rounded-lg shadow-lg w-full max-w-3xl bg-white"
                                autoPlay
                                loop
                                muted
                                controls
                                src="/videos/dyslexia_pronunciation.mp4"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                );
            case "dictation":
                return (
                    <div>
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                        Exploring Dictation
                    </h2>
                    <p className="text-gray-600 text-lg text-center mb-8 max-w-3xl mx-auto">
                        Dictation tasks help assess how dyslexia impacts a person's ability to process spoken language and convert it into written form. These exercises highlight challenges in spelling, grammar, and sentence construction, emphasizing the need for early diagnosis and tailored learning strategies.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Spelling Challenges",
                                description: "Dyslexia often causes spelling mistakes like letter reversals (e.g., *b* and *d*) or omissions, requiring phonics-focused intervention.",
                                imgSrc: "/images/spelling.png",
                            },
                            {
                                title: "Grammar Difficulties",
                                description: "Grammatical errors such as incorrect verb tenses or sentence fragments are common and demand structured practice and feedback.",
                                imgSrc: "/images/grammar.png",
                            },
                            {
                                title: "Sentence Structuring",
                                description: "Dyslexia can lead to poorly structured sentences due to difficulties in organizing thoughts, which impacts written clarity.",
                                imgSrc: "/images/sentence_structure.png",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm bg-white">
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className="w-40 h-40 object-cover rounded-md mb-4 shadow-md"
                                />
                                <h3 className="text-xl font-medium text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-600 text-center mt-8 max-w-3xl mx-auto">
                        These focused exercises are essential in identifying specific areas of difficulty and guiding personalized learning plans.
                    </p>
                </div>
                
                );
            default:
                return null;
        }
    };

    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-7xl mx-auto bg-white">
                <h1 className="text-4xl font-semibold text-gray-800 text-center mb-8">
                    Understanding Dyslexia
                </h1>
                <p className="text-gray-600 text-lg text-center mb-8">
                    Explore dyslexia through focused sections on pronunciation, dictation, and general information.
                </p>
                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-2 mx-2 border-b-4 font-medium text-lg bg-white ${
                                activeTab === tab.id
                                    ? "border-primary-color text-black"
                                    : "border-transparent text-gray-600 hover:text-secondary-color"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                {/* Content */}
                <div className="bg-white">{renderContent()}</div>
            </div>
        </section>
    );
};

export default DyslexiaTypes;
