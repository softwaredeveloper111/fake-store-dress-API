import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full py-5 border-b-2 border-zinc-300 flex items-center">
      <div className="left-nav w-[45%] flex justify-end pr-50">
        <Link className="text-zinc-400 font-medium text-[15px]">All DRESSES</Link>
      </div>

      <div className="right-nav w-[55%] flex gap-20 items-center">
        <h3 className="text-xl font-bold">DRESS BOUTIQUE</h3>
        <Link className="text-zinc-400 font-medium text-[15px]">CATEGORIES</Link>
        <Link className="text-zinc-400 font-medium text-[15px]">ABOUT</Link>
        <Link className="text-zinc-400 font-medium text-[15px]">CONTACT</Link>
      </div>
    </div>
  );
};

export default Nav;
