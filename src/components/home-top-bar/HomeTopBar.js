import React from 'react'
import './HomeTopBar.css'
import HomePageVideo from './home-page-video.mp4'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'

function HomeTopBar() {
  const typeWriteOptions = {
    strings: 'FRAMING LOVE & BEYOND',
    autoStart: true,
    delay: 100,
    loop: true,
    pauseFor: 3300,
  }

  return (
    <section className="home-top-bar-main-container">
      <div className="left flex flex-col justify-center">
        <div className="swipe">
          <h1 className="heading m-0 font-bold">
            {' '}
            <Typewriter options={typeWriteOptions} />
          </h1>
        </div>
        <p className="text-md m-0 ">
          Let's frame what it feels like to express love in a most natural way.
        </p>
        <Link to="/wedding" className="start font-semibold">
          <span>Start</span>
        </Link>
      </div>
      <div className="right relative">
        <video autoPlay muted loop id="myVideo">
          <source src={HomePageVideo} type="video/mp4" />
        </video>
        <div></div>
      </div>
    </section>
  )
}
export default HomeTopBar
