import React, { useState, useEffect } from 'react'
import ContactForm from '../components/contact-form/contact-form'
import GetInTouch from '../components/get-in-touch/get-in-touch'
import GetInTouchMap from '../components/get-in-touch-map/get-in-touch-map'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import sanityClient from '../client'
function GetInTouchCoimbatore() {
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
          'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15549.97096070904!2d77.636039!3d13.0042634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e6313a5964659e3!2sONE%20OF%20A%20KIND%20PHOTOGRAPHY%C2%AE%20-%20Wedding%20Photography%20In%20Bangalore!5e0!3m2!1sen!2sin!4v1655268738213!5m2!1sen!2sin'
        }
      />
      <ContactForm />
      <GetInTouchMap credentials={''} />
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
export default GetInTouchCoimbatore
