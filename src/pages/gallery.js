import React, { useState, useEffect, useRef } from 'react'
import WeddingImagesCarousel from '../components/wedding-images-carousel/wedding-images-carousel'
import GalleryMore from '../components/gallery-more/gallery-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import sanityClient from '../client'
import { Helmet } from 'react-helmet'

function Gallery() {
  const scrollRef = useRef()

  function scrollIntoView() {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const [hoverText, setHoverText] = useState([])
  const [imageUrls, setImageUrls] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "gallery"] {
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
          Candid Wedding Photographers in Bangalore, Best Candid Photography,
          Candid Video, Wedding Cinema, Couple Portraits
        </title>
        <meta
          name="description"
          content="One of a Kind Photography: Has professional Candid wedding photographers in Chennai, Bangalore etc for Couple candid wedding photography, Pre/Post Wedding Photography"
        />
        <meta name="robots" content="max-image-preview:large" />
        {/* <link rel="canonical" href="https://oneofakindphotography.in/" /> */}
      </Helmet>
      <WeddingImagesCarousel
        images={imageUrls}
        hoverText={hoverText}
        defaultHeading={'Gallery'}
      />
      <WeddingFooter scrollIntoView={scrollIntoView} />
      <GalleryMore scrollRef={scrollRef} />
    </div>
  )
}
export default Gallery
