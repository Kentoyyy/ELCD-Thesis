"use client";
import React, { useState } from "react";
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
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendedTest, setRecommendedTest] = useState<string | null>(null);

  const handleAnswerChange = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [questions[step - 1].id]: answer }));
    if (step < questions.length) {
      setStep((prev) => prev + 1);
    } else {
      const test = determineTest({ ...answers, [questions[step - 1].id]: answer });
      setRecommendedTest(test);
    }
  };

  if (recommendedTest) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-xl">
          <ResultCard test={recommendedTest} onReset={() => {
            setStep(1);
            setAnswers({});
            setRecommendedTest(null);
          }} />
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
