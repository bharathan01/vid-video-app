import React from "react";
import { categories } from "../utils/contents.jsx";
import SideBarList from "./SideBarList.jsx";

function SideMenu() {
  return (
    <div className="w-[240px] px-4">
      {categories.map((e) => {
        return (
          <React.Fragment key={e.name}>
            <SideBarList
              iconName={e.type === "home" ? "Home" : e.name}
              icon={e.icon}
            />
            {e.divider && <hr className="my-5 border-white/[0.2]" />}
          </React.Fragment>
        );
      })}
      <hr className="my-5 border-white/[0.2]" />
      <div className="text-white opacity-[0.2] text-sm py-3">
        <span>
          AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
          TermsPrivacyPolicy & SafetyHow YouTube worksTest new features 
          © 2024Google LLC
        </span>
      </div>
    </div>
  );
}
export default SideMenu;
