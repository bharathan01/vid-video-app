import React from "react";
import { categories } from "../utils/contents.jsx";
import SideBarList from "./SideBarList.jsx";

function SideMenu() {
  return (
    <div className="w-[240px] px-2">
      {categories.map((e) => {
        return (
        <React.Fragment key={e.name}>
           <SideBarList 
            iconName={e.type === "home" ? "Home" : e.name}
            icon={e.icon}/>
        </React.Fragment>);
      })}
    </div>
  );
}

export default SideMenu;
