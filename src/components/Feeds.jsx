import React, { useContext } from "react";
import SingleFeedBox from "./SingleFeedBox";
import { Context } from "../context/AppContext";

export default function Feeds() {
  const ARR = [1, 2, 3, 45, 6, 7, 8, 9, 0];
  return (
    <div className="flex flex-wrap gap-3">
      {ARR.map((e) => {
        return (
          <SingleFeedBox />
        )
      })}
    </div>
  );
}
