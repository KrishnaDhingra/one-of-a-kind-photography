import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CgClose } from 'react-icons/cg'
import './image-gallery.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/keyboard'
import 'swiper/css'
import sanityClient from '../../client'
import { AnimatePresence } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Backdrop from '../backdrop'

function ImageGallery() {
  const [imageUrls, setImageUrls] = useState([])
  const [selectedImage, setSelectedImage] = useState()
  const [sliderVisible, setSliderVisible] = useState(false)

  const toggleSliderVisible = () => {
    setSliderVisible(!sliderVisible)
  }
  const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  let { id } = useParams()
  id = id.replace(/-/g, ' ')
  id = toTitleCase(id)
  console.log(id)
  useEffect(() => {
    let cancel = false
    sanityClient
      .fetch(
        `*[hoverText=="${id}"] {
          imageGallery->{
            image[]{
              asset->{
              url
            }
          }
        }
      }`,
      )
      .then((data) => {
        console.log(data)
        if (cancel) return
        setImageUrls(data[0].imageGallery.image)
      })
      .catch((error) => {
        console.log(error)
      })

    return () => {
      cancel = true
    }
  }, [])

  return (
    <section id="photos">
      {imageUrls.length !== 0 &&
        imageUrls.map((item, index) => {
          return (
            <LazyLoadImage
              key={index}
              onClick={() => {
                setSelectedImage(index)
                setSliderVisible(true)
              }}
              alt={`Image gallery Photograph${index}`}
              src={item.asset.url}
              width="100%"
              height="100%"
            />
          )
        })}
      <AnimatePresence>
        {sliderVisible && (
          <motion.div
            onClick={(e) => {
              toggleSliderVisible()
              e.stopPropagation()
            }}
            className="top-0 left-0 backdrop-dark z-10 fixed w-screen h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CgClose
              onClick={toggleSliderVisible}
              className="videos-close-icon cursor-pointer text-3xl absolute top-[2.1rem] right-[4.4rem] sm:top-[2.7rem] sm:right-[6rem] text-white"
            />
            <div onClick={(e) => e.stopPropagation()}>
              <Swiper
                keyboard={true}
                navigation={true}
                modules={[Navigation, Keyboard]}
                initialSlide={selectedImage}
                className="image-gallery-swiper"
              >
                {imageUrls.map((item, index) => {
                  return (
                    <SwiperSlide
                      key={index}
                      className="image-gallery-swiper-slide"
                    >
                      <img
                        loading="lazy"
                        src={item.asset.url}
                        alt={`Slider Image ${index}`}
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
export default ImageGallery
