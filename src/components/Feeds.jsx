import React, { useContext } from "react";
import SingleFeedBox from "./SingleFeedBox";
import { Context } from "../context/AppContext";

export default function Feeds() {
  const {loading, searchResults } = useContext(Context);
  return (
    <div className="flex flex-wrap gap-3">
      {!loading &&
        searchResults.map((item) => {
          if (item.type !== "video") return false;
          return <SingleFeedBox 
                 key={item?.video?.videoId} 
                 video={item?.video} />;
        })}
    </div>
  );
}
