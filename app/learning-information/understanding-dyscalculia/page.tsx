"use client";

import React, { useState } from "react";
import Footer from "../../components/Footer";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex justify-between items-center w-full text-left py-2 px-4 rounded transition-all duration-300
                   ${isOpen ? "bg-green-100" : "hover:bg-gray-200"}  // Background change on click and hover`}
            >
                <span className="text-gray-800 font-semibold">{question}</span>
                <span className="text-gray-600">
                    {isOpen ? "▲" : "▼"}
                </span>
            </button>
            <div
                className={`mt-2 text-gray-700 transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
            >
                <p>{answer}</p>
            </div>
        </div>
    );
};

const UnderstandingDyscalculia = () => {
    const [showMore, setShowMore] = useState(false);

    const faqData = [
        {
            question: "How does dyslexia work?",
            answer: "Dyslexia works by causing difficulty recognizing and processing the sounds in language. Kids with dyslexia might reverse letters, like reading pot as top, have trouble sounding out new words, and struggle to recognize words they know."
        },
        {
            question: "How common is dyslexia?",
            answer: "Dyslexia affects approximately 1 in 5 people, and is the most common learning disability, accounting for 80-90% of all learning disorders."
        },
        {
            question: "What helps students with dyslexia?",
            answer: "Supportive teaching methods, individualized instruction, and tools such as audiobooks and speech-to-text software can be very beneficial for students with dyslexia."
        },
        {
            question: "What are the signs of dyslexia?",
            answer: "Signs include difficulties with reading, spelling, and writing, as well as challenges with phonological processing and rapid word recall."
        }
    ];

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <div className="flex-grow flex flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">

                {/* Existing Content */}
                <div className="w-full max-w-3xl mx-auto">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-2 text-center font-robotoserif">
                        Understanding Dysgraphia
                    </h1>
                    <p className="text-base text-gray-700 mb-6 text-center">
                        How to help kids who struggle with learning to write
                    </p>


                    {/* Writer and Clinical Expert */}
                    <div className="text-gray-500 text-xs mb-6 text-center">
                        <p>
                            Writer: <a href="#" className="text-blue-600 underline">.</a>
                        </p>
                        <p>
                            Clinical Expert: <a href="#" className="text-blue-600 underline">.</a>
                        </p>
                    </div>

                    {/* Language Button */}
                    <div className="flex justify-center">
                        <button className="px-3 py-1 mb-6 text-blue-700 border border-blue-700 rounded-full text-xs hover:bg-blue-50">
                            En Español
                        </button>
                    </div>

                    {/* What You'll Learn Section */}
                    <div className="bg-gray-50 p-5 rounded-lg shadow-md mb-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-3 text-center">What You'll Learn</h2>
                        <ul className="text-gray-700 space-y-2 text-sm text-center">
                            <li>• What is dysgraphia, and what are the signs?</li>
                            <li>• How is dysgraphia diagnosed?</li>
                            <li>• How can schools and parents support a child with dysgraphia?</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-3 mt-24 font-PTSerif">Quick Read</h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-bold">
                        Dysgraphia is a learning disorder that impairs one’s ability to write. Like all learning disabilities, it in no way means that your child isn’t smart, creative, and capable of success. In fact, with the right support, kids with dysgraphia can learn to write and do very well in school.
                    </p>
                    <div>
                        <div

                            className={`relative overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out ${!showMore ? "fade-effect" : "max-h-screen opacity-100"
                                }`}
                        >
                            <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                                Some of the signs of dysgraphia include motor challenges, like difficulty holding pencils and forming letters correctly. For kids with dysgraphia, writing may be really tiring and even painful for their hands.
                            </p>
                            <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            Separately, apart from these motor issues, there is a cognitive side to dysgraphia. The cognitive challenges include struggling with spelling, grammar, punctuation, sentence structure, and overall written expression. A child with dysgraphia might have a hard time translating their ideas onto paper.
                            </p>
                            <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            Dysgraphia can be evaluated by clinicians — usually occupational therapists for motor issues and neuropsychologists for cognitive challenges — and schools can provide accommodations to help in the classroom. Some of those accommodations include giving more time for written assignments, using a keyboard or audio recorder, and using graphic organizers to structure writing assignments.
                            </p>
                            <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            There are many ways that parents can support their child with dysgraphia. You can seek early intervention, ask for adaptive technologies at school, help kids practice writing at home, and provide emotional support. Children with learning disabilities can often feel frustrated and develop anxiety and low self-confidence. But with the right support at home and in the classroom, they can effectively manage dysgraphia and keep up with their peers.
                            </p>
                           
                        </div>
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="text-blue-500 font-medium mt-4"
                        >
                            {showMore ? "Show Less" : "Read More"}
                        </button>
                    </div>
                    {/* Separate New Section Below "Less" Button */}
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3 mt-14 font-PTSerif ">What is Dysgraphia?</h2>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            Dyslexia is most commonly associated with trouble learning to read. It affects a child’s ability to recognize and manipulate the sounds in language. Kids with dyslexia have a hard time decoding new words, or breaking them down into manageable chunks they can then sound out. This causes difficulty with reading, writing, and spelling. They may compensate by memorizing words, but they’ll have trouble recognizing new words and may be slow in retrieving even familiar ones.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            Dyslexia is not a reflection of a child’s intelligence — in fact, it’s defined as a gap between a student’s ability and achievement. Some youngsters with dyslexia are able to keep up with their peers with extra effort at least for the first few grades. But by the third grade or so, when they need to be able to read quickly and fluently in order to keep up with their work, they run into trouble.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            With help and strategies for compensating for their weakness in decoding, students with dyslexia can learn to read and thrive academically. But dyslexia is not something one grows out of.
                        </p>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3 mt-14 font-PTSerif ">How common is dyslexia?</h2>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            It is estimated that as many as one in five kids has dyslexia, and that 80 to 90 percent of kids with learning disorders have it. Sally Shaywitz, MD, co-director of the Yale Center for Dyslexia and Creativity, notes that many children go undiagnosed as struggles in school are incorrectly attributed to intelligence, level of effort orenvironmental factors.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            Although experts used to say that dyslexia occurred more often in boys than in girls, current research indicates that it affects boys and girls equally.
                        </p>

                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3 mt-14 font-PTSerif">Signs of Dyslexia</h2>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            A young person with dyslexia may:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium space-y-2">
                            <li>Struggle with learning even simple rhymes</li>
                            <li>Have a speech delay</li>
                            <li>Have trouble following directions</li>
                            <li>Repeat or omit short words such as <em>and</em>, <em>the</em>, <em>but</em></li>
                            <li>Find it difficult to tell left from right</li>
                        </ul>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            In school, children with dyslexia are likely to:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium space-y-2">
                            <li>Have difficulty sounding out new words</li>
                            <li>Lack fluency compared to other children their age</li>
                            <li>Reverse letters and numbers when reading (read <em>saw</em> as <em>was</em>, for example)</li>
                            <li>Find it difficult to take notes and copy down words from the board</li>
                            <li>Struggle with rhyming, associating sounds with letters, and sequencing and ordering sounds</li>
                            <li>Stumble and have difficulty spelling even common words; frequently they will spell them phonetically (e.g., <em>hrbr</em> instead of <em>harbor</em>)</li>
                            <li>Avoid being called on to read out loud in front of classmates</li>
                            <li>Become tired or frustrated from reading</li>
                        </ul>
                        <p className="text-gray-900 text-2xl leading-relaxed mb-6 font-raleway font-bold">
                            Dyslexia affects children outside of school as well. Kids with dyslexia may also:
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium space-y-2">
                            <li>Find it difficult to decode logos and signs</li>
                            <li>Struggle when trying to learn the rules to games</li>
                            <li>Have difficulty keeping track of multi-step directions</li>
                            <li>Struggle with getting the hang of telling time</li>
                            <li>Find it especially challenging to learn another language</li>

                        </ul>
                        <p className="text-gray-900 text-2xl leading-relaxed mb-6 font-raleway font-bold">
                            Social and emotional impacts of dyslexia
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            Dyslexia affects a lot more than reading — it can also impact a child socially. “A dyslexic person who has word-finding difficulties can have trouble with their expressive language,” says Scott Bezsylko, the executive director of Winston Preparatory School, which specializes in teaching kids with learning disorders. “That has a social impact, in addition to your difficulties with reading and writing, that make you feel not so good about yourself.”
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            Kids with dyslexia — particularly those who have yet to be diagnosed — often suffer from low self-esteem because they worry that there is something wrong with them, and are often accused of not trying hard enough to learn to read. “A lot of our work with dyslexic kids is to help them rediscover that they are smart and capable,” notes Beszylko, “because they’ve stopped believing in themselves.”
                        </p>
                        <p className="text-gray-900 text-2xl leading-relaxed mb-6 font-raleway font-bold">
                            How is dyslexia diagnosed?
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            If your child isn’t meeting expectations for reading, as parents you can ask the school district to perform an evaluation and share the results with you. The evaluation will test your child’s intellectual capacity and reading skills, to see if there is an achievement gap. It should also rule out other potential causes like environmental factors or hearing impairment.
                        </p>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="w-full max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default UnderstandingDyscalculia;
