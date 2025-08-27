import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-[var(--primary)] border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;