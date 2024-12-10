export const determineTest = (answers: Record<string, string>) => {
    if (answers["readingDifficulty"] === "yes") {
      return "Comprehensive Dyslexia Evaluation";
    }
    if (answers["writingDifficulty"] === "yes") {
      return "Basic Dyslexia Screening";
    }
    return "General Literacy Assessment";
  };
  