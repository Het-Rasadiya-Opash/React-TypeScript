import React from "react";
import Button from "./components/Button";

const App: React.FC = () => {
  return (
    <>
      <Button label="Click Me" onClick={() => alert("Btn Click")} />
    </>
  );
};

export default App;
