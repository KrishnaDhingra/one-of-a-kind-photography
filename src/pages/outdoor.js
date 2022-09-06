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
  const [imageGalleriesId, setImageGalleriesId] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "outdoor"] {
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
        <meta name="keywords" content="Outdoor wedding Photography" />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <title>
          Outdoor wedding photography | Wedding outdoor photoshoot | OOAK
        </title>
        <meta
          name="description"
          content="Outdoor wedding photography: One of a kind photography offer Wedding outdoor photoshoot and capture the best moments on your big day. For Outdoor wedding photography just click the website"
        />
      </Helmet>
      <OutdoorImagesCarousel
        images={imageUrls}
        hoverText={hoverText}
        defaultHeading={'Outdoor'}
        imageGalleriesId={imageGalleriesId}
      />
      <WeddingFooter scrollIntoView={scrollIntoView} />
      <OutdoorMore scrollRef={scrollRef} />
    </div>
  )
}
export default Outdoor
