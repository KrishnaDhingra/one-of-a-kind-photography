import React, { useState, useEffect } from 'react'
import './book-now-slider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import sanityClient from '../../client'

function BookNowSlider() {
  const items = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
  ]

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
      hoverText
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
      spaceBetween={25}
      pagination={true}
      direction={'horizontal'}
      modules={[Pagination]}
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
