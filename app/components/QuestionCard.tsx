import { MdHelpOutline } from "react-icons/md";

const QuestionCard = ({
  question,
  hint,
  onAnswer,
}: {
  question: string;
  hint: string;
  onAnswer: (answer: string) => void;
}) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
        <MdHelpOutline className="text-blue-500 w-6 h-6" />
        {question}
      </h2>
      <p className="text-sm text-gray-500 italic mb-4">{hint}</p>
      <div className="space-y-4 mb-6">
        <button
          onClick={() => onAnswer("yes")}
          className="w-full px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Yes
        </button>
        <button
          onClick={() => onAnswer("no")}
          className="w-full px-5 py-3 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400 transition"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
