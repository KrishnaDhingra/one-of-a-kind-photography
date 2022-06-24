import React from 'react'
import BookNowTopSection from '../components/book-now-top-section/book-now-top-section'
import BookNowContactForm from '../components/book-now-contact-form/book-now-contact-form'
import BookNowSlider from '../components/book-now-slider/book-now-slider'
// import BookNowFoundersNote from '../components/book-now-founders-note/book-now-founders-note'
import ImmortalizeBookNow from '../components/immortalize-book-now/immortalize-book-now'
import { Helmet } from 'react-helmet'
function BookNow() {
  return (
    <main>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <title>
          Candid Wedding Photographers in Chennai | Coimbatore | Bangalore |
          OOAK
        </title>
        <meta
          name="description"
          content="Wedding Photography: Book us now and get the best Candid Wedding Photography Services in Chennai. Contact One  of a kind photography to get the best Wedding Photography in Chennai, Coimbatore and Bangalore"
        />
        <meta name="robots" content="max-image-preview:large" />
        {/* <link rel="canonical" href="https://oneofakindphotography.in/" /> */}
      </Helmet>
      <BookNowTopSection />
      <BookNowContactForm />
      {/* <BookNowFoundersNote /> */}
      <ImmortalizeBookNow />
      <BookNowSlider />
    </main>
  )
}
export default BookNow
