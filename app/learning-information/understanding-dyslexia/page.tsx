"use client";

import React, { useState, useRef, useEffect } from "react";

const UnderstandingDyslexia = () => {
    const [showMore, setShowMore] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null); // To track the height of content

    // Get the dynamic height of the content for smooth expansion/collapse
    useEffect(() => {
        if (contentRef.current) {
            if (showMore) {
                contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
                contentRef.current.style.opacity = "1"; // Fade in
            } else {
                contentRef.current.style.maxHeight = "0px";
                contentRef.current.style.opacity = "0"; // Fade out
            }
        }
    }, [showMore]);

    return (
        <div className="bg-white min-h-screen flex flex-col md:flex-row gap-8 px-4 py-8 sm:px-6 lg:px-8">
            {/* Main Content */}
            <div className="w-full max-w-3xl mx-auto">
                {/* Title and Description */}
                <h1 className="text-5xl font-extrabold text-gray-900 mb-2 text-center font-robotoserif">
                    Understanding Dyslexia
                </h1>
                <p className="text-base text-gray-700 mb-6 text-center">
                    Know the signs, and how to help kids with the most common learning disability.
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
                        <li>• What is dyslexia, and what are the signs?</li>
                        <li>• How and when is dyslexia diagnosed?</li>
                        <li>• How can schools and parents support a child with dyslexia?</li>
                    </ul>
                </div>

                {/* Quick Read Section */}
                <div >
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 mt-24 font-PTSerif">Quick Read</h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-bold">
                        The most common learning disorder is called dyslexia. Dyslexia makes it hard to recognize and use the sounds in language. Kids might reverse letters, like reading <em>"pot"</em> as <em>"top"</em>. Or they might have trouble sounding out new words and recognizing ones they know. Having dyslexia does not mean your child isn’t smart. With the right support, dyslexic kids can learn to read and do very well in school.
                    </p>

                    {/* Expandable content with animation */}
                    <div
                        ref={contentRef}
                        className={`relative overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out ${!showMore ? "fade-effect" : ""
                            }`}
                    >
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            Children each learn and develop at their own pace, and reading is no different from other skill building. It’s common for kids to find reading challenging at one point or another. But if learning to read becomes an ongoing struggle that leaves a child falling behind their peers, it’s possible that they have a learning disorder known as dyslexia.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            Kids with dyslexia often show signs before they start school. They often have trouble learning even simple rhymes. They might talk later than most kids. They may struggle to follow directions or learn left and right. Once they start school, they struggle with reading, writing, and spelling.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            <span className="font-bold bg-yellow-200">If your child</span> is in first grade or older and still struggling with reading, their school can give them a test for dyslexia. You can also get an <a href="#" className="text-blue-600 underline">outside evaluation</a> from a psychologist, reading specialist, or speech and language therapist. Using the results from the tests, you can work with the school to get your child the right support.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            There are lots of reading instruction programs that can help kids with dyslexia build skills and catch up with their classmates. They can also <a href="#" className="text-blue-600 underline">get other kinds of support at school</a>. This could include extra time on tests, a quiet workspace, and options to listen rather than reading, or to type or speak rather than writing by hand.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
                            Kids with dyslexia may feel frustrated or embarrassed, so it’s also important to give them plenty of emotional support. Make sure to praise their hard work, celebrate their strengths in other areas, and remind them that dyslexia has nothing to do with their intelligence.
                        </p>
                    </div>

                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="text-blue-600 underline font-medium"
                    >
                        {showMore ? "Less" : "More"}
                    </button>
                </div>

                {/* Separate New Section Below "Less" Button */}
                <div className="mt-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 mt-14 font-PTSerif ">What is Dyslexia?</h2>
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
                </div>

            </div>
        </div>
    );
};

export default UnderstandingDyslexia;
