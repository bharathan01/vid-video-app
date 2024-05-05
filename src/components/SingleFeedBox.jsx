import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/AppContext";

function SingleFeedBox() {
  const { mobileMenu } = useContext(Context);
  return (
    <Link to={"/"}>
      <div
        className={`flex flex-col gap-2 overflow-hidden h-60  ${
          mobileMenu ? "w-[339px]" : "w-96"
        }`}
      >
        <div className="w-full overflow-hidden rounded-xl">
          <img
            src="https://i.postimg.cc/HnGWFQMf/uwp2291296.jpg"
            alt=""
            srcset=""
            className="bg-contain"
          />
        </div>
        <div>
          <div className="w-Full flex ">
            <div className="w-9 h-9  rounded-full overflow-hidden">
              <img
                src="https://xsgames.co/randomusers/avatar.php?g=male"
                alt="profile"
                srcset=""
                className="bg-contain"
              />
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </Link>
  );
}

export default SingleFeedBox;
