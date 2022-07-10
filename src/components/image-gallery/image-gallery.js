import React, { useState, useEffect } from 'react'
import './image-gallery.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'
import sanityClient from '../../client'
import { AnimatePresence } from 'framer-motion'
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import SampleImage from '../../utilities/sidebar-image.png'
import Backdrop from '../backdrop'

function ImageGallery() {
  const [imageUrls, setImageUrls] = useState([])
  const [selectedImage, setSelectedImage] = useState()
  const [sliderVisible, setSliderVisible] = useState(false)

  const toggleSliderVisible = () => {
    setSliderVisible(!sliderVisible)
  }
  const { id } = useParams()
  useEffect(() => {
    let cancel = false
    sanityClient
      .fetch(
        `*[_id == "${id}"] {
          image[]{
            asset->{
              url
            }
          }
      }`,
      )
      .then((data) => {
        if (cancel) return
        console.log(data[0].image)
        setImageUrls(data[0].image)
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
          <Backdrop onSelect={toggleSliderVisible}>
            <div onClick={(e) => e.stopPropagation()}>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                initialSlide={selectedImage}
                className="image-gallery-swiper"
              >
                {imageUrls.map((item, index) => {
                  return (
                    <SwiperSlide className="image-gallery-swiper-slide">
                      <img src={item.asset.url} alt={`Slider Image ${index}`} />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </Backdrop>
        )}
      </AnimatePresence>
    </section>
  )
}
export default ImageGallery
