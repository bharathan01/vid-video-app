import React, { useContext } from "react";
import Feeds from "../components/Feeds";
import SideMenu from "./SideMenu";
import { Context } from "../context/AppContext";
function Home() {
  const {mobileMenu} = useContext(Context)  
  return (
    <div className="flex bg-black w-full min-h-screen">
      <div className={`overflow-y-scroll ${mobileMenu ? "w-[95px]" : "w-[290px] "}`}>
        <SideMenu />
      </div>
      <div className={`${mobileMenu ? "w-[calc(100%-80px)]": "w-[calc(100%-240px)]"} text-white p-5`} >
        <Feeds />
      </div>
    </div>
  );
}

export default Home;
