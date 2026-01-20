import React from "react";
interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: string;
}

const ReusableComponent: React.FC<ButtonProps> = ({ text, onClick, color }) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: color,
          color: "#fff",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ReusableComponent;
