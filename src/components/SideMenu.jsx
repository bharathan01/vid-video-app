import React, { useContext } from "react";
import { categories } from "../utils/contents.jsx";
import SideBarList from "./SideBarList.jsx";
import { Context } from "../context/AppContext.jsx";

function SideMenu() {
  const { selectedCategory, setSelectedCategory, mobileMenu } =  useContext(Context);

  const clickHandler = (name, type) => {
    switch (type) {
        case "category":
            return setSelectedCategory(name);
        case "home":
            return setSelectedCategory(name);
        case "menu":
            return false;
        case "You":
           return false;    
        default:
            break;
    }
};
  return (
    <div
      className={`md:block overflow-y-auto h-full px-4 bg-black absolute  translate-x-[-240px] md:translate-x-0 transition-all overflow-x-hidden ${
        mobileMenu ? "w-[85px]" : "w-[240px]"
      }`}
    >
      {categories.map((e) => {
        return (
          <React.Fragment key={e.name}>
            <SideBarList
              iconName={e.type === "home" ? "Home" : e.name}
              icon={e.icon}
              className={`${
                selectedCategory === e.name ? "bg-white/[0.15]" : ""
              }`}
              mobileMenu={mobileMenu}
              action={()=>{
                clickHandler(e.name,e.type)
              }}
            />
            {e.divider && <hr className="my-5 border-white/[0.2]" />}
          </React.Fragment>
        );
      })}
      <hr className="my-5 border-white/[0.2]" />
      <div
        className={`text-white opacity-[0.2] text-sm py-3 ${
          mobileMenu ? "hidden" : ""
        }`}
      >
        <span>
          AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
          TermsPrivacyPolicy & SafetyHow YouTube worksTest new features ©
          2024Google LLC
        </span>
      </div>
    </div>
  );
}
export default SideMenu;
