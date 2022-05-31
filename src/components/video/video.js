import React from 'react'
import './video.css'
import { useLocation } from 'react-router-dom'
function Video() {
  const location = useLocation()
  console.log(location)
  const { videoLink } = location.state
  return (
    <iframe
      id="video"
      src={videoLink}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="video"
    />
  )
}
export default Video
