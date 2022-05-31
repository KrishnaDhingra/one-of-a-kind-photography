import React from 'react'
import BookNowTopSectionImage from '../../utilities/book-now-image.jpg'
import './book-now-top-section.css'
function BookNowTopSection() {
  return (
    <section className="book-now-top-section-container flex flex-col gap-12">
      <h1 className="book-now-heading text-center">Book Now</h1>
      <div className="main-content px-8 md:px-0">
        <p>
          Let's create memories together. We are honored to be a part of your
          big day/event. It's a privilege for us to freeze your moments which
          you will cherish forever. Let's talk to connect and hold a seamless
          journey together, we are ready to answer you anytime. Your information
          is never sold and there is no pressure to buy.
        </p>

        <img
          className="w-full object-cover aspect-video rounded-2xl"
          src={BookNowTopSectionImage}
          alt="About Us Photo"
        />
      </div>
    </section>
  )
}
export default BookNowTopSection
