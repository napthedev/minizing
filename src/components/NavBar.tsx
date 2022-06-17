import { FC } from "react";
import { FaSearch } from "react-icons/fa";
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
          <FaSearch className="fill-gray-400 w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default Navbar;
