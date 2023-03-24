import React from "react";

interface ButtonProps {
  content: string;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ content, className, isLoading, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className + " block group rounded-2xl h-12 w-48 bg-blue-400 font-bold text-lg text-white relative overflow-hidden"}
    >
      {isLoading ? "loading..." : content}
      <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
    </button>
  );
};

export default Button;
