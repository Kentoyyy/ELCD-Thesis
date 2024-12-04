import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-2xl font-bold">Welcome to the Dyslexia Detector</h1>
      <Link href="/handwriting" className="text-blue-500 underline">
        Handwriting Prediction
      </Link>
      <Link href="/pronunciation" className="text-blue-500 underline">
        Pronunciation Test
      </Link>
      <Link href="dyslexia/dictation-test" className="text-blue-500 underline">
        Dictation Start
      </Link>
    </div>
  );
};

export default Home;
