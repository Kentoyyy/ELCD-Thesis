// UnderstandingDyslexia.tsx
"use client";

import React, { useState, useRef } from "react";
import Sidebar from "../../components/DyslexiaSidebar";

const UnderstandingDyslexia = () => {
    const [showMore, setShowMore] = useState(false);
    const contentRef = useRef<HTMLDivElement | null>(null);

    // Refs for each section
    const quickReadRef = useRef<HTMLDivElement | null>(null);
    const whatIsDyslexiaRef = useRef<HTMLDivElement | null>(null);
    const howCommonIsDyslexiaRef = useRef<HTMLDivElement | null>(null);
    const signsOfDyslexiaRef = useRef<HTMLDivElement | null>(null);
    const socialImpactRef = useRef<HTMLDivElement | null>(null);
    const diagnosisRef = useRef<HTMLDivElement | null>(null);

    const scrollToSection = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-white min-h-screen flex flex-col md:flex-row gap-8 px-4 py-8 sm:px-6 lg:px-8">
            <div className="w-64 flex-shrink-0">
                <Sidebar
                    onSectionClick={scrollToSection}
                    sectionRefs={{
                        quickReadRef,
                        whatIsDyslexiaRef,
                        howCommonIsDyslexiaRef,
                        signsOfDyslexiaRef,
                        socialImpactRef,
                        diagnosisRef,
                    }}
                />
            </div>

            <div className="flex-grow max-w-4xl mx-auto">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-2 text-center font-robotoserif">
                    Understanding Dyslexia
                </h1>
                <p className="text-base text-gray-700 mb-6 text-center">
                    Know the signs, and how to help kids with the most common learning disability.
                </p>

                {/* Sections */}
                <div ref={quickReadRef}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3 mt-24 font-PTSerif">Quick Read</h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-bold">
                        The most common learning disorder is called dyslexia. Dyslexia makes it hard to recognize and use the sounds in language. Kids might reverse letters, like reading <em>"pot"</em> as <em>"top"</em>. Or they might have trouble sounding out new words and recognizing ones they know. Having dyslexia does not mean your child isn’t smart. With the right support, dyslexic kids can learn to read and do very well in school.
                    </p>
                    <div
                        ref={contentRef}
                        style={{
                            maxHeight: showMore ? `${contentRef.current?.scrollHeight}px` : "0px",
                            opacity: showMore ? 1 : 0,
                        }}
                        className="overflow-hidden transition-all duration-500 ease-in-out"
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

                {/* Additional sections */}
                {/* ... (other section refs like whatIsDyslexiaRef, howCommonIsDyslexiaRef, etc.) */}
            </div>
        </div>
    );
};

export default UnderstandingDyslexia;
