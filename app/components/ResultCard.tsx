import { MdCheckCircle } from "react-icons/md";

const ResultCard = ({
  test,
  onReset,
}: {
  test: string;
  onReset: () => void;
}) => {
  return (
    <div className="text-center">
      <MdCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Recommended Test
      </h2>
      <p className="text-gray-600 mb-6">{test}</p>
      <button
        onClick={onReset}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Start Over
      </button>
    </div>
  );
};

export default ResultCard;
