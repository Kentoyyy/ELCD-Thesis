"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { determineTest } from "@/utils/determineTest";
import ProgressBar from "../../components/ProgressBar";
import QuestionCard from "../../components/QuestionCard";
import ResultCard from "../../components/ResultCard";

const questions = [
  {
    id: "readingDifficulty",
    question: "Does your child have difficulty reading?",
    hint: "Examples: struggles to decode words, skips lines, or has trouble understanding what they read.",
  },
  {
    id: "writingDifficulty",
    question: "Does your child find writing challenging?",
    hint: "Examples: messy handwriting, difficulty forming letters, or frequent grammar mistakes.",
  },
  {
    id: "spellingIssues",
    question: "Does your child have trouble spelling even simple words?",
    hint: "Examples: inconsistent spelling of the same word or skipping letters while writing.",
  },
  {
    id: "organizationDifficulty",
    question: "Does your child struggle with organizing their work or following instructions?",
    hint: "Examples: trouble planning tasks, sequencing events, or completing assignments.",
  },
  {
    id: "memoryRetention",
    question: "Does your child have difficulty remembering things they've just learned?",
    hint: "Examples: forgetting instructions, words, or lessons quickly.",
  },
];

const DyslexiaInterview = () => {
  const { data: session, status: sessionStatus } = useSession(); // Check user session
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendedTest, setRecommendedTest] = useState<string | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false); // State to track animation and delay

  // Redirect to login if the user is not authenticated
  useEffect(() => {
    if (sessionStatus === "unauthenticated") {
      router.replace("/login"); // Redirect to login page if not logged in
    }
  }, [sessionStatus, router]);

  const handleAnswerChange = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [questions[step - 1].id]: answer }));
    if (step < questions.length) {
      setStep((prev) => prev + 1);
    } else {
      const test = determineTest({ ...answers, [questions[step - 1].id]: answer });
      setRecommendedTest(test);
    }
  };

  useEffect(() => {
    if (recommendedTest === "Comprehensive Dyslexia Evaluation") {
      // Wait 3 seconds to show the result before redirecting
      const timeout = setTimeout(() => {
        setIsRedirecting(true); // Start redirect animation
        setTimeout(() => {
          router.push("/assessment/dyslexia/phonological"); // Redirect after animation
        }, 3000); // 3000ms for animation delay
      }, 3000); // 3 seconds to show the result

      return () => clearTimeout(timeout); // Cleanup timeout if component unmounts
    }
  }, [recommendedTest, router]);

  if (sessionStatus === "loading") {
    // Show a loading state while checking session
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (isRedirecting) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="text-center">
          <p className="text-2xl font-semibold text-gray-800 mb-4">
            Redirecting to the phonological test...
          </p>
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  if (recommendedTest) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-xl">
          <ResultCard
            test={recommendedTest}
            onReset={() => {
              setStep(1);
              setAnswers({});
              setRecommendedTest(null);
              setIsRedirecting(false);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dyslexia Screening</h1>
          <p className="text-sm text-gray-500">Step {step} of {questions.length}</p>
          <ProgressBar step={step} total={questions.length} />
        </div>
        <QuestionCard
          question={questions[step - 1].question}
          hint={questions[step - 1].hint}
          onAnswer={handleAnswerChange}
        />
      </div>
    </div>
  );
};

export default DyslexiaInterview;
