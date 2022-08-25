import React from 'react'
import './video.css'
import { CgClose } from 'react-icons/cg'
import { useLocation, useNavigate } from 'react-router-dom'
function Video() {
  const location = useLocation()
  const history = useNavigate()

  const { videoLink } = location.state

  const redirect = () => {
    history('/videos')
  }
  return (
    <>
      <CgClose
        onClick={redirect}
        className="videos-close-icon cursor-pointer text-3xl absolute top-[2.1rem] right-[4.4rem] sm:top-[2.7rem] sm:right-[6rem]"
      />
      <iframe
        id="video"
        src={videoLink}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
    </>
  )
}
export default Video
