import React, { useState, useEffect, useRef } from 'react'
import OutdoorImagesCarousel from '../components/outdoor-images-carousel/outdoor-images-carousel'
import OutdoorMore from '../components/outdoor-more/outdoor-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import sanityClient from '../client'
import { Helmet } from 'react-helmet'

function Outdoor() {
  const scrollRef = useRef()

  function scrollIntoView() {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const [hoverText, setHoverText] = useState([])
  const [imageUrls, setImageUrls] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "outdoor"] {
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
          Outdoor wedding photography | Wedding outdoor photoshoot | OOAK
        </title>
        <meta
          name="description"
          content="Outdoor wedding photography: One of a kind photography offer Wedding outdoor photoshoot and capture the best moments on your big day. For Outdoor wedding photography just click the website"
        />
        <meta name="robots" content="max-image-preview:large" />
        {/* <link rel="canonical" href="https://oneofakindphotography.in/" /> */}
      </Helmet>
      <OutdoorImagesCarousel
        images={imageUrls}
        hoverText={hoverText}
        defaultHeading={'Outdoor'}
      />
      <WeddingFooter scrollIntoView={scrollIntoView} />
      <OutdoorMore scrollRef={scrollRef} />
    </div>
  )
}
export default Outdoor
