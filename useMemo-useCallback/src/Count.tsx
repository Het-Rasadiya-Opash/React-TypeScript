import  { memo, useRef } from "react";

type BioData = {
  name: string;
  age: number;
};

type CountsProps = {
  bioData: BioData;
};

export const Counts= memo(({ bioData }: CountsProps) => {
  const renderCount = useRef<number>(0);
  console.log(renderCount);

  return (
    <div className="mt-3 font-display text-center">
      <p>
        nothing change here but Ive now rendered:
        <span className="text-red-600">
          {renderCount.current++} time(s)
        </span>
      </p>

      <p>
        My name is {bioData.name} & age {bioData.age}
      </p>
    </div>
  );
});
