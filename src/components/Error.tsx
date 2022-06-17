import { FC } from "react";

const Error: FC = () => {
  return (
    <div className="py-16 flex flex-col justify-center items-center gap-3">
      <img className="w-[200px] h-[200px]" src="/error.png" alt="" />
      <h1 className="text-2xl">Something went wrong</h1>
    </div>
  );
};

export default Error;
