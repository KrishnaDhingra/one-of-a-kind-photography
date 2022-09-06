import React, { useState, useEffect, useRef } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import WeddingMore from '../components/wedding-more/wedding-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import sanityClient from '../client'
import { Helmet } from 'react-helmet'

function Wedding() {
  const scrollRef = useRef()

  function scrollIntoView() {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const [hoverText, setHoverText] = useState([])
  const [imageUrls, setImageUrls] = useState([])
  const [imageGalleriesId, setImageGalleriesId] = useState([])
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "wedding"] {
      mainImage{
          asset->{
            url
          }
      },
      hoverText,
      imageGallery->{
        _id
      }
  }`,
      )
      .then((data) => {
        data.forEach((item) => {
          console.log(item.imageGallery._id)
          setImageUrls((prev) => [...prev, item.mainImage.asset.url])
          setHoverText((prev) => [...prev, item.hoverText])
          setImageGalleriesId((prev) => [...prev, item.imageGallery._id])
        })
      })
      .catch(console.log)
  }, [])

  return (
    <div className="flex flex-col gap-4">
      <Helmet>
        <title>
          Candid Wedding photographers in Chennai | Coimbatore | Bangalore |
          OOAK
        </title>
        <meta
          name="description"
          content="Wedding Photography services: Oneofakindphotography is offer the best wedding photography services in chennai, Bangalore, Coimbatore. OOAK specialized in candid wedding photography and more"
        />
      </Helmet>
      <WeddingImagesCarousel
        images={imageUrls}
        hoverText={hoverText}
        imageGalleriesId={imageGalleriesId}
        defaultHeading={'Wedding'}
      />
      <WeddingFooter scrollIntoView={scrollIntoView} />
      <WeddingMore scrollRef={scrollRef} />
    </div>
  )
}
export default Wedding
