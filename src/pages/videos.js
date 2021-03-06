import React, { useState, useEffect, useRef } from 'react'
import VideosImagesCarousel from '../components/videos-images-carousel/videos-images-carousel'
import VideosMore from '../components/videos-more/videos-more'
import WeddingFooter from '../components/wedding-footer/wedding-footer'
import HappilyEverAfter from '../components/happily-ever-after/happily-ever-after'
import { AnimateSharedLayout } from 'framer-motion'
import sanityClient from '../client'

function Videos() {
  const scrollRef = useRef()

  function scrollIntoView() {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const [happilyIndexCounter, setHappilyIndexCounter] = useState(0)
  const [happilyVisible, setHappilyVisible] = useState(false)

  const [hoverText, setHoverText] = useState([])
  const [imageUrls, setImageUrls] = useState([])
  const [documentIds, setDocumentIds] = useState([])
  const [videoLinks, setVideoLinks] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "videos"] {
      mainImage{
          asset->{
            url
          }
      },
      hoverText,
      videoLink,
      _id
  }`,
      )
      .then((data) => {
        data.forEach((item) => {
          setImageUrls((prev) => [...prev, item.mainImage.asset.url])
          setHoverText((prev) => [...prev, item.hoverText])
          setVideoLinks((prev) => [...prev, item.videoLink])
          setDocumentIds((prev) => [...prev, item._id])
        })
      })
      .catch(console.log)
  }, [])
  return (
    <AnimateSharedLayout type="crossfade">
      <div className="flex flex-col gap-4">
        {happilyVisible ? (
          <HappilyEverAfter
            images={imageUrls}
            documentIds={documentIds}
            videoLinks={videoLinks}
            index={happilyIndexCounter}
          />
        ) : (
          // pass all the videos here that have been fethced from firebase and also pass props that will help select the index of the video that have been selected
          <VideosImagesCarousel
            setHappilyIndexCounter={setHappilyIndexCounter}
            setHappilyVisible={setHappilyVisible}
            images={imageUrls}
            hoverText={hoverText}
            defaultHeading={'Videos'}
          />
        )}
        <WeddingFooter scrollIntoView={scrollIntoView} />
        <VideosMore scrollRef={scrollRef} />
      </div>
    </AnimateSharedLayout>
  )
}
export default Videos
