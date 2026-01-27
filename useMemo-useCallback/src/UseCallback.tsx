import { memo, useCallback, useState, type JSX,type ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

const Button = memo(({ onClick, children }: ButtonProps) => {
  console.log(`Rendering btn: ${children}`);

  return (
    <button
      className={`text-black mb-4 py-2 px-5 ${
        children === "increment" ? "bg-green-400" : "bg-red-400"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default function UseCallback(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback((): void => {
    console.log("increment inside");
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback((): void => {
    console.log("decrement inside");
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
      <h1 className="mb-4">Count: {count}</h1>

      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  );
}
