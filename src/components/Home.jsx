import React from 'react'
import Feeds from "../components/Feeds"
import SideMenu from './SideMenu'
function Home() {
  return (
    <div className='flex'>
    <SideMenu/>
    <Feeds/>
    </div>
  )
}

export default Home