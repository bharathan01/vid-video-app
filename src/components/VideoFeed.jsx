import React, { useContext } from 'react'
import { Context } from '../context/AppContext'
import  VideoPlayer  from "../components/VideoPlayer";
import SideMenu from "./SideMenu";
import Suggestion from "../components/Suggestion";

function VideoFeed() {
  const {mobileMenu} = useContext(Context) 
  return (
    <div className="flex bg-black w-full min-h-screen relative text-white">
      <div className={`overflow-y-scroll ${mobileMenu ? "hidden" : "w-[250px]"}`}>
        <SideMenu />
      </div>
      <div className='text-white w-full'>
        <VideoPlayer/>
      </div>
    </div>
  )
}

export default VideoFeed