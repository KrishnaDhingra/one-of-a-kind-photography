import React from 'react'
import './video.css'
import HomePageVideo from './home-page-video.mp4'

function Video() {
  return (
    <iframe
      id="video"
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      title="video"
    />
  )
}
export default Video
