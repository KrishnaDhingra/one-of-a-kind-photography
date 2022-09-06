import React from 'react'
import './wedding-footer.css'
import { Link } from 'react-router-dom'

function WeddingFooter({ scrollIntoView }) {
  const relative_path = window.location.pathname

  return (
    <footer className="relative wedding-footer justify-evenly mt-4 sm:mt-0 sm:gap-[0] sm:justify-between flex pb-8">
      {relative_path === '/wedding-photography' ? (
        <Link to="/photographyservices">Services</Link>
      ) : (
        <Link to="/wedding-photography">Wedding</Link>
      )}
      {relative_path === '/wedding-photography' ||
      relative_path === '/photographyservices' ? (
        <Link to="/gallery">Gallery</Link>
      ) : (
        <Link to="/photographyservices">Services</Link>
      )}
      <p
        className="discover-more-text font-semibold absolute sm:font-normal sm:relative"
        onClick={scrollIntoView}
      >
        Discover More +
      </p>
      {relative_path === '/wedding-photography' ||
      relative_path === '/photographyservices' ||
      relative_path === '/gallery' ? (
        <Link to="/outdoor-wedding-photography">Outdoor</Link>
      ) : (
        <Link to="/gallery">Gallery</Link>
      )}
      {relative_path === '/videos' ? (
        <Link to="/outdoor-wedding-photography">Outdoor</Link>
      ) : (
        <Link to="/videos">Videos</Link>
      )}
    </footer>
  )
}
export default WeddingFooter
