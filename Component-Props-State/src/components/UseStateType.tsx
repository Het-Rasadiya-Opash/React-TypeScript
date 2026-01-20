import React, { useState } from "react";

const UseStateType: React.FC = () => {
  const [message, setMessage] = useState<string>("Hello");

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage("Welcome to TypeScript!")}>
        Change Message
      </button>
    </div>
  );
};

export default UseStateType;
