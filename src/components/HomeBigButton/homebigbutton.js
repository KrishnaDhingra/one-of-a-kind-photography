import React from 'react'
import './homebigbutton.css'
import { Link } from 'react-router-dom'

function HomeBigButton() {
  return (
    <Link to="/wedding-photography" className="homebigbutton text-center">
      Enter into our beautiful world of photography
    </Link>
  )
}
export default HomeBigButton
