const ProgressBar = ({ step, total }: { step: number; total: number }) => {
    const progressPercentage = (step / total) * 100;
  
    return (
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-primary-color h-2 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    );
  };
  
  export default ProgressBar;
  