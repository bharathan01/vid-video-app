import React from "react";
import ytLogo from "../image/yt-logo.png";

import { IoIosSearch } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between  bg-black h-16 px-6">
      <div className="flex items-center gap-4">
        <div className="w-8 h-9 flex flex-col justify-center items-center gap-1 rounded-full hover:bg-[#303030]/[0.6]">
          <span className="w-4 h-px bg-white"></span>
          <span className="w-4 h-px bg-white"></span>
          <span className="w-4 h-px bg-white"></span>
        </div>
        <div className="w-24 h-9 flex items-center">
          <img src={ytLogo} />
        </div>
      </div>
      <div className="">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 ">
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
          <RiVideoAddLine className="text-white text-xl cursor-pointer" />
        </div>
        <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
          <FiBell className="text-white text-xl cursor-pointer" />
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
