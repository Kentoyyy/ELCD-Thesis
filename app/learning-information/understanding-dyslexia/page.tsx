import React from 'react';

const UnderstandingDyslexia = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center gap-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* Sidebar */}
      <div className="hidden md:block w-64 sticky top-8">
        <h3 className="text-blue-700 font-semibold mb-4 text-sm">Quick Read</h3>
        <ul className="text-gray-600 space-y-1 text-sm leading-5">
          <li className="font-semibold text-gray-800 mb-2">Full Article</li>
          <li className="cursor-pointer hover:text-blue-700">What is dyslexia?</li>
          <li className="cursor-pointer hover:text-blue-700">How common is dyslexia?</li>
          <li className="cursor-pointer hover:text-blue-700">Signs of dyslexia</li>
          <li className="cursor-pointer hover:text-blue-700">Social and emotional impacts of dyslexia</li>
          <li className="cursor-pointer hover:text-blue-700">How is dyslexia diagnosed?</li>
          <li className="cursor-pointer hover:text-blue-700">When should a child be evaluated?</li>
          <li className="cursor-pointer hover:text-blue-700">How to help kids with dyslexia</li>
          <li className="cursor-pointer hover:text-blue-700">Accommodations for kids with dyslexia</li>
          <li className="cursor-pointer hover:text-blue-700">Other ways to support a child with dyslexia</li>
          <li className="cursor-pointer hover:text-blue-700">Emotional support</li>
        </ul>
        <button className="mt-6 flex items-center text-blue-700 font-medium text-sm space-x-1 hover:underline">
          <span className="material-icons text-base">arrow_upward</span>
          <span>Back to Top</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-3xl">
        {/* Title and Description */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Understanding Dyslexia</h1>
        <p className="text-base text-gray-700 mb-6 text-center">
          Know the signs, and how to help kids with the most common learning disability.
        </p>

        {/* Writer and Clinical Expert */}
        <div className="text-gray-500 text-xs mb-6 text-center">
          <p>
            Writer: <a href="#" className="text-blue-600 underline">Katherine Martinelli</a>
          </p>
          <p>
            Clinical Expert: <a href="#" className="text-blue-600 underline">Matthew Cruger, PhD</a>
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
          <h2 className="text-xl font-bold text-gray-900 mb-3 text-center">Quick Read</h2>
          <p className="text-gray-700 text-sm mb-3 text-justify">
            The most common learning disorder is called dyslexia. Dyslexia makes it hard to recognize and use the sounds in language. Kids might reverse letters, like reading "pot" as "top". Or they might have trouble sounding out new words and recognizing ones they know. Having dyslexia does not mean your child isn’t smart. With the right support, dyslexic kids can learn to read and do very well in school.
          </p>
          <p className="text-gray-700 text-sm mb-3 text-justify">
            Kids with dyslexia often show signs before they start school. They often have trouble learning even simple rhymes. They might talk later than most kids. They may struggle to follow directions or learn left and right. Once they start school, they struggle with reading, writing, and spelling.
          </p>
          <p className="text-gray-700 text-sm text-justify">
            If your child is in first grade or older and still struggling with reading, their school can give them a test for dyslexia. You can also get an <a href="#" className="text-blue-600 underline">outside evaluation</a> from a psychologist, reading specialist, or speech and language therapist. Using the results from the tests, you can work with the school to get your child the right support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderstandingDyslexia;
