import React from 'react'
import './HomeTopBar.css'
import SideBarImage from '../../utilities/sidebar-image.png'
import { Link } from 'react-router-dom'

function HomeTopBar() {
  return (
    <section className="home-top-bar-main-container">
      <div className="left flex flex-col justify-center">
        <h1 className="heading m-0 font-bold">Framing Love & Beyond</h1>
        <p className="text-md m-0 ">
          Let's frame what it feels like to express love in a most natural way.
        </p>
        <Link to="/wedding" className="start font-semibold">
          <span>Start</span>
        </Link>
        <a href="#" className="mt-3">
          <span className="text-md discover-more">Discover More</span>
        </a>
      </div>
      <div className="right relative">
        <div className="relative ">
          <img className="" src={SideBarImage} alt="" />
        </div>
      </div>
    </section>
  )
}
export default HomeTopBar
