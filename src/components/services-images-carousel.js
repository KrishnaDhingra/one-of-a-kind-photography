import React, { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useNavigate } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { EffectCoverflow, Pagination } from 'swiper'

function ServicesImagesCarousel({
  visible,
  hoverText,
  images,
  defaultHeading,
}) {
  const history = useNavigate()

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  const [selected, setSelected] = useState('')

  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimateSharedLayout>
      <div className="block md:hidden">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          slidesPerView={'auto'}
          // loop={true}
          spaceBetween={25}
          onSlideChange={({ activeIndex }) => {
            setIsVisible(false)
            // change this to items[activeIndex].text
            setSelected(hoverText[activeIndex])
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {images.map((image, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={() => {
                  let slug = hoverText[index]
                  // remove white spaces at start and end, convert it into lowercase and then replace all the white spaces in between with '-'
                  slug = slug.trim().toLowerCase().replace(/\s/g, '-')
                  history(`/services/${slug}`)
                }}
              >
                <img src={image} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div
        key={visible}
        className="hidden md:flex flex-col items-center gap-24"
      >
        <motion.section
          layout
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          className="WeddingImagesCarousel"
        >
          {images.map((image, index) => {
            return (
              <motion.div
                layout
                key={index}
                onMouseEnter={() => {
                  setIsVisible(false)
                  // change this
                  setSelected(hoverText[index])
                }}
                onMouseLeave={() => setIsVisible(true)}
                onClick={() => {
                  let slug = hoverText[index]
                  // remove white spaces at start and end, convert it into lowercase and then replace all the white spaces in between with '-'
                  slug = slug.trim().toLowerCase().replace(/\s/g, '-')
                  history(`/services/${slug}`)
                }}
                whileHover={{
                  width: '220px',
                  transition: { duration: 0.4 },
                }}
                className="videos-image"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></motion.div>
            )
          })}
        </motion.section>
      </div>
      <AnimatePresence>
        {isVisible ? (
          <DefaultHeading text={defaultHeading} />
        ) : (
          <Heading content={selected} />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}
function DefaultHeading({ text }) {
  return (
    <motion.h1
      className="wedding-heading text-center mt-8 mb-7 sm:mb-0 sm:mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
    >
      {text}
    </motion.h1>
  )
}
function Heading({ content }) {
  return (
    <motion.h1
      className="wedding-heading text-center mt-8 mb-7 sm:mb-0 sm:mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0 }}
    >
      {content}
    </motion.h1>
  )
}
export default ServicesImagesCarousel
