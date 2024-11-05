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
          <h2 className="text-3xl font-bold text-gray-900 mb-3 mt-24 font-raleway">Quick Read</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
            The most common learning disorder is called dyslexia. Dyslexia makes it hard to recognize and use the sounds in language. Kids might reverse letters, like reading <em>"pot"</em> as <em>"top"</em>. Or they might have trouble sounding out new words and recognizing ones they know. Having dyslexia does not mean your child isn’t smart. With the right support, dyslexic kids can learn to read and do very well in school.
          </p>

          {/* Expandable content with animation */}
          <div
            ref={contentRef}
            className={`relative overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out ${
              !showMore ? "fade-effect" : ""
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
          <h2 className="text-3xl font-bold text-gray-900 mb-3 mt-6 font-raleway">What is Dyslexia?</h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
            Dyslexia is most commonly associated with trouble learning to read. It affects a child’s ability to recognize and manipulate the sounds in language. Kids with dyslexia have a hard time decoding new words, or breaking them down into manageable chunks they can then sound out. This causes difficulty with reading, writing, and spelling. They may compensate by memorizing words, but they’ll have trouble recognizing new words and may be slow in retrieving even familiar ones.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6 font-raleway font-medium">
            Dyslexia is not a reflection of a child’s intelligence — in fact, it’s defined as a gap between a student’s ability and achievement. Some youngsters with dyslexia are able to keep up with their peers with extra effort at least for the first few grades. But by the third grade or so, when they need to be able to read quickly and fluently in order to keep up with their work, they run into trouble.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderstandingDyslexia;
