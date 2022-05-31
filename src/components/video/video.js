import React from 'react'
import './video.css'
import HomePageVideo from './home-page-video.mp4'

function Video() {
  return (
    <video autoPlay muted loop id="video">
      <source className="h-full w-full" src={HomePageVideo} type="video/mp4" />
    </video>
  )
}
export default Video
