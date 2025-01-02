"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { determineTest } from "@/utils/determineTest";
import ProgressBar from "../../components/ProgressBar";
import QuestionCard from "../../components/QuestionCard";
import ResultCard from "../../components/ResultCard";
import Modal from "../../components/Modal"; // Custom modal component

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
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();
  const [step, setStep] = useState(0); // 0 for overview
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendedTest, setRecommendedTest] = useState<string | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    if (sessionStatus === "unauthenticated") {
      router.replace("/login");
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
    if (recommendedTest) {
      const timeout = setTimeout(() => {
        setIsRedirecting(true);
        setTimeout(() => {
          router.push("/assessment/dyslexia/phonological");
        }, 3000);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [recommendedTest, router]);

  if (sessionStatus === "loading") {
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

  // Step 0: Introduction and overview
  if (step === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-lg w-full p-8 bg-white shadow-lg rounded-xl text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Dyslexia Screening Overview</h1>
          <p className="text-gray-600 mb-6">
            Dyslexia screening helps identify potential learning challenges early, enabling timely support for your child. 
            By identifying signs early, you can access specialized support to unlock their full potential.
          </p>
          <div className="mb-6">
            <img
              src="/images/dyslexicbrain.gif"
              alt="Dyslexia Screening Overview"
              className="rounded-lg mx-auto"
            />
          </div>
          <button
            className="px-6 py-3 bg-primary-color text-white rounded-full text-sm hover:bg-secondary-color transition duration-300"
            onClick={() => setShowTermsModal(true)}
          >
            Start Dyslexia Screening
          </button>
        </div>
        {showTermsModal && (
          <Modal
            title="Terms and Conditions"
            onClose={() => setShowTermsModal(false)}
          >
            <p className="text-gray-600 mb-4">
              By proceeding with this screening, you agree to our terms and conditions. This assessment is for informational purposes only and not a formal diagnosis. Please consult a licensed professional for a comprehensive evaluation.
            </p>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-gray-600 text-sm">
                I have read and agree to the terms and conditions.
              </label>
            </div>
            <button
              className={`px-6 py-3 rounded-full text-sm ${
                termsAccepted
                  ? "bg-primary-color text-white hover:bg-secondary-color"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              } transition duration-300`}
              disabled={!termsAccepted}
              onClick={() => {
                setShowTermsModal(false);
                setStep(1);
              }}
            >
              Proceed to Screening
            </button>
          </Modal>
        )}
      </div>
    );
  }

  // Step 1 and onwards: Screening questions
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dyslexia Screening</h1>
          <p className="text-sm text-gray-500">
            Step {step} of {questions.length}
          </p>
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
