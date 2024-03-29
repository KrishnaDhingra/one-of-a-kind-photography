import React, { useState, useEffect, useRef } from 'react'
import ServicesImagesCarousel from '../components/services-images-carousel'
import ServicesMore from '../components/services-more/services-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import sanityClient from '../client'
import { Helmet } from 'react-helmet'

function Services() {
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
        `*[_type == "services"] {
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
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <title>
          Candid wedding photography services | Chennai | Bangalore | One of a
          kind photography
        </title>
        <meta
          name="description"
          content="Wedding Photography services: Oneofakindphotography is offer the best wedding photography services in chennai, Bangalore, Coimbatore. OOAK specialized in candid wedding photography and more"
        />
        <meta name="robots" content="max-image-preview:large" />
        {/* <link rel="canonical" href="https://oneofakindphotography.in/" /> */}
      </Helmet>
      <ServicesImagesCarousel
        images={imageUrls}
        hoverText={hoverText}
        defaultHeading={'Services'}
        imageGalleriesId={imageGalleriesId}
      />
      <WeddingFooter scrollIntoView={scrollIntoView} />
      <ServicesMore scrollRef={scrollRef} />
    </div>
  )
}
export default Services
