import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div className="h-16 border-b border-gray-800 flex justify-between items-center px-[5vw]">
      <Link to="/" className="flex items-center gap-2">
        <img className="w-8 h-8" src="/icon.png" alt="" />
        <h1 className="text-xl">MiniZing</h1>
      </Link>
      <form className="relative">
        <input
          className="bg-dark border border-gray-600 outline-none rounded-full py-2 px-3 w-72"
          type="text"
          placeholder="Search..."
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              className="fill-gray-400"
              d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Navbar;
