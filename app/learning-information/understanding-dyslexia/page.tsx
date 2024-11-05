import React from 'react';

const UnderstandingDyslexia = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col md:flex-row gap-8 px-4 py-8 sm:px-6 lg:px-8">
            {/* Sidebar */}

            {/* Main Content */}
            <div className="w-full max-w-3xl mx-auto">
                {/* Title and Description */}
                <h1 className="text-5xl font-extrabold text-gray-900 mb-2 text-center font-robotoserif">Understanding Dyslexia</h1>
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
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center font-robotoserif">Quick Read</h2>
                    <p className="text-gray-900 text-base leading-relaxed mb-6 text-justify">
                        The most common learning disorder is called dyslexia. Dyslexia makes it hard to recognize and use the sounds in language. Kids might reverse letters, like reading <em>"pot"</em> as <em>"top"</em>. Or they might have trouble sounding out new words and recognizing ones they know. Having dyslexia does not mean your child isn’t smart. With the right support, dyslexic kids can learn to read and do very well in school.
                    </p>
                    <p className="text-gray-900 text-base leading-relaxed mb-6 text-justify">
                        Kids with dyslexia often show signs before they start school. They often have trouble learning even simple rhymes. They might talk later than most kids. They may struggle to follow directions or learn left and right. Once they start school, they struggle with reading, writing, and spelling.
                    </p>
                    <p className="text-gray-900 text-base leading-relaxed mb-6 text-justify">
                        If your child is in first grade or older and still struggling with reading, their school can give them a test for dyslexia. You can also get an <a href="#" className="text-blue-600 underline">outside evaluation</a> from a psychologist, reading specialist, or speech and language therapist. Using the results from the tests, you can work with the school to get your child the right support.
                    </p>
                    <p className="text-gray-900 text-base leading-relaxed mb-6 text-justify">
                        There are lots of reading instruction programs that can help kids with dyslexia build skills and catch up with their classmates. They can also <a href="#" className="text-blue-600 underline">get other kinds of support at school.</a> fThis could include extra time on tests, a quiet workspace, and options to listen rather than reading, or to type or speak rather than writing by hand.
                    </p>
                    <p className="text-gray-900 text-base leading-relaxed mb-6 text-justify">
                        Kids with dyslexia may feel frustrated or embarrassed, so it’s also important to give them plenty of emotional support. Make sure to praise their hard work, celebrate their strengths in other areas, and remind them that dyslexia has nothing to do with their intelligence.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default UnderstandingDyslexia;
