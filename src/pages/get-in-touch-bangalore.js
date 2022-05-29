import React, { useState, useEffect } from 'react'
import ContactForm from '../components/contact-form/contact-form'
import GetInTouch from '../components/get-in-touch/get-in-touch'
import GetInTouchMap from '../components/get-in-touch-map/get-in-touch-map'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import sanityClient from '../client'
function GetInTouchBangalore() {
  const [hoverText, setHoverText] = useState([])
  const [imageUrls, setImageUrls] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "wedding"] {
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
          setImageUrls((prev) => [...prev, item.mainImage.asset.url])
          setHoverText((prev) => [...prev, item.hoverText])
        })
      })
      .catch(console.log)
  }, [])
  return (
    <main className="flex flex-col">
      <GetInTouch />
      <ContactForm />
      <GetInTouchMap />
      <h1 className="text-center md:text-left md:ml-28 mb-[5rem] mt-[7rem] text-[24px] md:text-[36px] font-medium">
        Wedding photographers in Bangalore
      </h1>
      <WeddingImagesCarousel
        images={imageUrls}
        hoverText={hoverText}
        defaultHeading={'Wedding'}
      />
    </main>
  )
}
export default GetInTouchBangalore
