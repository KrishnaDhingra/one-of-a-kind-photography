import React, { useState, useEffect } from 'react'
import './book-now-top-section.css'
import sanityClient from '../../client'

function BookNowTopSection() {
  const [imageUrl, setImageUrl] = useState(null)
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "bookNowImage"] {
      mainImage{
          asset->{
            url
          }
      },
      hoverText
  }`,
      )
      .then((data) => {
        data.forEach((item) => {
          setImageUrl(item.mainImage.asset.url)
        })
      })
      .catch(console.log)
  }, [])

  return (
    <section className="book-now-top-section-container flex flex-col gap-12">
      <h1 className="book-now-heading text-center">Book Now</h1>
      <div className="main-content px-8 md:px-0">
        <p>
          You have found the one person on earth you want to spend the rest of
          your life with? The greatest love and your true best friend? Think
          about that for a second, because that's powerful. At One Of A Kind
          Photography, we will be by your side every step of the way, ready to
          capture the very essence of your love story. We're honored you're here
          and would love to learn about you and your story! Have a sneak peek at
          our portfolio for inspiration and feel free to contact us.
        </p>

        {imageUrl && (
          <img
            className="w-full book-now-image aspect-video rounded-2xl"
            src={imageUrl}
            alt="Book Now Photo"
          />
        )}
        {!imageUrl && (
          <div className="w-full bg-gray-300 aspect-video rounded-2xl"></div>
        )}
      </div>
    </section>
  )
}
export default BookNowTopSection
