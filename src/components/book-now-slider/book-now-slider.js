import React, { useState, useEffect } from 'react'
import './book-now-slider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/keyboard'
import sanityClient from '../../client'

function BookNowSlider() {
  const [imageUrls, setImageUrls] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "bookNowSlider"] {
      mainImage{
          asset->{
            url
          }
      },
  }`,
      )
      .then((data) => {
        data.forEach((item) => {
          setImageUrls((prev) => [...prev, item.mainImage.asset.url])
        })
      })
      .catch(console.log)
  }, [])

  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      centeredSlidesBounds={true}
      slidesPerView={'auto'}
      keyboard={true}
      spaceBetween={25}
      autoplay={{ delay: 2000 }}
      navigation={true}
      pagination={{ clickable: true }}
      direction={'horizontal'}
      modules={[Pagination, Navigation, Autoplay, Keyboard]}
      className="book-now-swiper"
    >
      {imageUrls.map((item, index) => {
        return (
          <SwiperSlide key={index} className="book-now-swiper-slide">
            <img src={item} alt={`Slider Image ${index}`} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
export default BookNowSlider
