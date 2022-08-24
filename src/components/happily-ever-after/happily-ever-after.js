import React, { useState } from 'react'
import './happily-ever-after.css'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function HappilyEverAfter({ images, documentIds, videoLinks, index }) {
  const [indexCounter, setIndexCounter] = useState(index)

  // fetch all the videos from firebase or other option is to receive videos as props from videos page component and then use the index that have been selected by the videos images carousel to render the desired image

  const next = () => {
    if (indexCounter !== images.length - 1) {
      setIndexCounter(indexCounter + 1)
      return
    }
    setIndexCounter(0)
  }
  const previous = () => {
    if (indexCounter !== 0) {
      setIndexCounter(indexCounter - 1)
      return
    }
    setIndexCounter(images.length - 1)
  }
  return (
    <div className="flex flex-col gap-20 mt-[4rem]">
      <section className="mx-auto max-w-[1300px] w-[95%] flex justify-between items-center">
        <IoIosArrowBack
          onClick={previous}
          className="cursor-pointer hover:text-gray-400 text-[2rem]"
        />
        <Link
          to={`/videos/${documentIds[indexCounter]}`}
          state={{ videoLink: videoLinks[indexCounter] }}
        >
          <div className="cursor-pointer relative happily-ever-after-image-container max-w-[300px] sm:max-w-[550px]">
            <motion.img
              transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
              layoutId="main-image"
              src={images[indexCounter]}
              className="w-full h-full object-cover rounded-[1.5rem]"
              alt="Happily Ever After Image"
            />
            <button className="play-button ">
              <FaPlay className="text-[3rem] md:text-[5rem]" />
            </button>
          </div>
        </Link>
        <IoIosArrowForward
          onClick={next}
          className="cursor-pointer hover:text-gray-400 text-[2rem]"
        />
      </section>

      <h1 className="text-[36px] sm:text-[42px] font-semibold text-center mb-20 sm:mb-3">
        Happily Ever After
      </h1>
    </div>
  )
}

export default HappilyEverAfter
