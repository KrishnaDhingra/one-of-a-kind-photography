import React, { useState, useEffect } from 'react'
import OutdoorImagesCarousel from '../components/outdoor-images-carousel/outdoor-images-carousel'
import OutdoorMore from '../components/outdoor-more/outdoor-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import sanityClient from '../client'

function Outdoor() {
  const [outdoorMoreVisible, setOutdoorMoreVisible] = useState(false)

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
      <OutdoorImagesCarousel
        visible={outdoorMoreVisible}
        images={imageUrls}
        hoverText={hoverText}
        defaultHeading={'Outdoor'}
      />
      <WeddingFooter setMoreVisible={setOutdoorMoreVisible} />
      {outdoorMoreVisible && (
        <OutdoorMore setMoreVisible={outdoorMoreVisible} />
      )}
    </div>
  )
}
export default Outdoor
