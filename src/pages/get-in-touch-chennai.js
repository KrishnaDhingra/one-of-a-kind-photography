import React, { useState, useEffect } from 'react'
import ContactForm from '../components/contact-form/contact-form'
import GetInTouch from '../components/get-in-touch/get-in-touch'
import GetInTouchMap from '../components/get-in-touch-map/get-in-touch-map'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import sanityClient from '../client'
function GetInTouchChennai() {
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
      <GetInTouch
        link={
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15545.45258914672!2d80.2128566!3d13.0761562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc33b6b192cddf8c1!2sONE%20OF%20A%20KIND%20PHOTOGRAPHY%C2%AE%20-%20Wedding%20Photography%20In%20Chennai!5e0!3m2!1sen!2sin!4v1655268791908!5m2!1sen!2sin'
        }
      />
      <ContactForm credentials={''} />
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
export default GetInTouchChennai
