import React from "react";

function SideBarList({ icon, iconName }) {
  return (
    <div
      className={
        "text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15]"
      }
    >
      <span className="text-xl mr-5">{icon}</span>
      {iconName}
    </div>
  );
}

export default SideBarList;
