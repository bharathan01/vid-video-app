import React from "react";

function SideBarList({ icon, iconName ,className,mobileMenu ,action}) {
  return (
    <div
      className={
        "text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] "+className
      }
      onClick={action}
    >
      <span className="text-xl mr-5">{icon}</span>
      {!mobileMenu && <span >{iconName}</span>}
    </div>
  );
}

export default SideBarList;
