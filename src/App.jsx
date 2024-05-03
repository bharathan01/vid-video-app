import React from "react";
import fetchYoutubeData from "./utils/api";

function App() {

  fetchYoutubeData('search').then((data) =>{
    console.log(data) 
  })
  return (
    <div className="text-red-600">App</div>
  )
}

export default App 