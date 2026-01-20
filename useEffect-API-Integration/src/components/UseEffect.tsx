import React, { useEffect } from "react";

const UseEffect: React.FC = () => {
  useEffect(() => {
    console.log("Use Effect");
  }, []);
  return <div>Use Effect</div>;
};

export default UseEffect;
