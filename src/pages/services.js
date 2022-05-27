import React, { useState, useEffect } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import ServicesMore from '../components/services-more/services-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import sanityClient from '../client'

function Services() {
  const [servicesMoreVisible, setServicesMoreVisible] = useState(false)

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
    <div className="flex flex-col gap-4">
      <WeddingImagesCarousel
        visible={servicesMoreVisible}
        images={imageUrls}
        hoverText={hoverText}
        defaultHeading={'Services'}
      />
      <WeddingFooter setMoreVisible={setServicesMoreVisible} />
      {servicesMoreVisible && (
        <ServicesMore setMoreVisible={servicesMoreVisible} />
      )}
    </div>
  )
}
export default Services
