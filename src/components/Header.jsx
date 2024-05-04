import React from "react";
import ytLogo from "../image/yt-logo.png";
import logo from "../image/yt-logo-mobile.png"

import { IoIosSearch } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";

export default function Header() {
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      <div className="flex items-center gap-4">
        <div className="w-8 h-9 flex flex-col justify-center items-center gap-1 rounded-full hover:bg-[#303030]/[0.6]">
          <span className="w-4 h-px bg-white"></span>
          <span className="w-4 h-px bg-white"></span>
          <span className="w-4 h-px bg-white"></span>
        </div>
        <div className="w-24 h-5 flex items-center">
          <img src={ytLogo} className="h-full hidden dark:md:block" />
          <img src={logo} className="h-full dark:md:hidden" />
        </div>
      </div>
      <div>
        <div className="flex h-8 md:h-10  md:pl-5 border border-[#303030] rounded-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <input
            type="text"
            placeholder="Search"
            className="p-1 bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
          />
          <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]">
            <IoIosSearch className="text-white text-xl cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
          <RiVideoAddLine className="text-white text-2xl cursor-pointer" />
        </div>
        <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
          <FiBell className="text-white text-2xl cursor-pointer" />
        </div>
        <div className="w-8 h-7 rounded-full cursor-pointer">
          <img
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
