import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/AppContext";
import { abbreviateNumber } from "js-abbreviation-number";

function SingleFeedBox({ video }) {
  const { mobileMenu } = useContext(Context);
  return (
    <Link to={`Video/${video?.videoId}`}>
      <div
        className={`flex flex-col gap-2 overflow-hidden  ${
          mobileMenu ? "w-[339px]" : "w-96"
        }`}
      >
        <div className="w-full overflow-hidden rounded-xl bg-contain">
          <img
            src={video?.thumbnails[0]?.url}
            alt=""
            srcset=""
            className="bg-contain"
          />
        </div>
        <div>
          <div className="w-Full flex gap-3 ">
            <div className="w-12 h-9 rounded-full overflow-hidden ">
              <img
                src={video?.author?.avatar[0]?.url}
                alt="profile"
                srcset=""
                className="bg-contain"
              />
            </div>
            <div className="text-white ">
              <span className="font-semibold">{video?.title}</span>
              <br />
              <span className="text-sm opacity-80">{video?.author?.title}</span>
              <br />
              <span className="text-sm opacity-80">
                {`${abbreviateNumber(video?.stats?.views, 2)} views`}{" "}
                {video?.publishedTimeText}ago
              </span>
            </div>
          </div>
          <div className="flex flex-col text-sm"></div>
        </div>
      </div>
    </Link>
  );
}

export default SingleFeedBox;
