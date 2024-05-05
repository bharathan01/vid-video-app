import React from "react";
import Feeds from "../components/Feeds";
import SideMenu from "./SideMenu";
function Home() {
  return (
    <div className="flex bg-black w-full min-h-screen">
      <div className="overflow-y-scroll">
        <SideMenu />
      </div>
      <div>
        <Feeds />
      </div>
    </div>
  );
}

export default Home;
