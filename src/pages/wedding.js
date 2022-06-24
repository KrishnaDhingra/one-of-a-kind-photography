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
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <title>
          Candid Wedding photographers in Chennai | Coimbatore | Bangalore |
          OOAK
        </title>
        <meta
          name="description"
          content="Wedding Photography services: Oneofakindphotography is offer the best wedding photography services in chennai, Bangalore, Coimbatore. OOAK specialized in candid wedding photography and more"
        />
        <meta name="robots" content="max-image-preview:large" />
        {/* <link rel="canonical" href="https://oneofakindphotography.in/" /> */}
      </Helmet>
      <WeddingImagesCarousel
        images={imageUrls}
        hoverText={hoverText}
        defaultHeading={'Wedding'}
      />
      <WeddingFooter scrollIntoView={scrollIntoView} />
      <WeddingMore scrollRef={scrollRef} />
    </div>
  )
}
export default Wedding
