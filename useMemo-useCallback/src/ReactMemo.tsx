import React, { useMemo, useState } from "react";
import { Counts } from "./Count";

const ReactMemo: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const myBioData = useMemo(() => {
    return {
      name: "het",
      age: 22,
    };
  }, []);

  return (
    <>
      <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-end items-center">
        <h1>{count}</h1>

        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="btn bg-cyan-500 py-1 px-3"
        >
          Increment
        </button>
      </div>

      <Counts bioData={myBioData} />
    </>
  );
};

export default ReactMemo;
