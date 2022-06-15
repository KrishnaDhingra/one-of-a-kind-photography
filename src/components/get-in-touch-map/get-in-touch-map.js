import React from 'react'

function GetInTouchMap({ link }) {
  return (
    <iframe
      src={link}
      style={{ width: '100vw', height: '400px' }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  )
}
export default GetInTouchMap
