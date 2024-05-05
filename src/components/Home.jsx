import React from 'react'
import Feeds from "../components/Feeds"
import SideMenu from './SideMenu'
function Home() {
  return (
    <div className='flex bg-black w-full min-h-screen'>
    <SideMenu/>
    <Feeds/>
    </div>
  )
}

export default Home