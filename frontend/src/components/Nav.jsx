import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full py-5 border-b-2 border-zinc-300 flex items-center px-10 justify-between">
      
      <input className="border border-zinc-300 px-3 py-2 rounded-md outline-none w-70" type="search" placeholder="item search here" />

      <div className="flex gap-18 items-center">
        <NavLink style={(e)=>e.isActive?{borderBottom:"2px solid orangered"}:{borderBottom:"0px solid orange"}} to="/" className="text-zinc-400 font-medium text-[15px] mr-20">All DRESSES</NavLink>
        <h3 className="text-xl font-bold">DRESS BOUTIQUE</h3>
        <Link className="text-zinc-400 font-medium text-[15px]">CATEGORIES</Link>
        <Link className="text-zinc-400 font-medium text-[15px]">ABOUT</Link>
        <Link className="text-zinc-400 font-medium text-[15px]">CONTACT</Link>
      </div>

      <Link to="/admin" className="px-3 py-2 bg-orange-300  rounded-md cursor-pointer">Admin panel</Link>
    
    </div>
  );
};

export default Nav;
