import React, { useState, useEffect } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import GalleryMore from '../components/gallery-more/gallery-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import sanityClient from '../client'

function Gallery() {
  const [galleryMoreVisible, setGalleryMoreVisible] = useState(false)

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
        visible={galleryMoreVisible}
        images={imageUrls}
        hoverText={hoverText}
        defaultHeading={'Gallery'}
      />
      <WeddingFooter setMoreVisible={setGalleryMoreVisible} />
      {galleryMoreVisible && (
        <GalleryMore setMoreVisible={galleryMoreVisible} />
      )}
    </div>
  )
}
export default Gallery
