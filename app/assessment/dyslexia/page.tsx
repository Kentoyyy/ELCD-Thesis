import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl mb-8">Learning Disability Detection</h1>
      <div className="space-y-4">
        <Link href="dyslexia/dyslexia-predict">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Dyslexia Prediction</button>
        </Link>
        <Link href="dyslexia/dictation-test">
          <button className="px-4 py-2 bg-green-500 text-white rounded">Dictation Test</button>
        </Link>
        <Link href="dyslexia/pronunciation-test">
          <button className="px-4 py-2 bg-orange-500 text-white rounded">Pronunciation Test</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
