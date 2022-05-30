import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Backdrop from '../backdrop'
import './what-happening-sidepopup.css'
import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'
import SideBarImage from '../../utilities/sidebar-image.png'
import sanityClient from '../../client'

function WhatHappeningSidePopup({ onSelect }) {
  const main = {
    hidden: { x: '-100%' },
    visible: {
      x: '0%',
      transition: {
        ease: [0.6, 0, 0.1, 1],
        duration: 0.4,
      },
    },
    exit: {
      x: '-100%',
      transition: {
        duration: 0.2,
      },
    },
  }

  const [blogInfo, setBlogInfo] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "sidebar"] {
      sidebarImage{
          asset->{
            url
          }
      },
      heading,
      text
  }`,
      )
      .then((data) => {
        data.forEach((item) => {
          setBlogInfo((prev) => [
            ...prev,
            {
              image: item.sidebarImage.asset.url,
              heading: item.heading,
              text: item.text,
            },
          ])
        })
      })
      .catch(console.log)
  }, [])

  return (
    <Backdrop onSelect={onSelect}>
      <motion.main
        onClick={(e) => e.stopPropagation()}
        variants={main}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="sidepopup-container flex"
      >
        <SideBar onSelect={onSelect} />

        <section className="popup-main-content">
          <h2 onClick={onSelect} className="font-semibold what-happening-text">
            What's Happening
          </h2>

          <div className="flex flex-col gap-20">
            {blogInfo.map((item, index) => {
              return <Article {...item} key={index} />
            })}
          </div>
        </section>
      </motion.main>
    </Backdrop>
  )
}

const SideBar = ({ onSelect }) => {
  const item = {
    hidden: { x: '-40%', opacity: 0 },
    visible: {
      x: '0%',
      opacity: 1,
      transition: {
        ease: [0.6, 0, 0.1, 1],
        duration: 0.4,
        delay: 0.25,
      },
    },
    exit: {
      x: '-40%',
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.section
      variants={item}
      className="popup-sidebar flex flex-col justify-between h-screen"
    >
      <CgClose onClick={onSelect} className=" text-md" />
      <div className="cursor-pointer flex flex-col gap-7 sidebar-bottom items-center">
        {/* <span className="sidebar-text  text-sm">
        Follow OOAK Photography
      </span> */}
        <a href="">
          <BsInstagram className="cursor-pointer sidebar-icon  text-xs sm:text-sm" />
        </a>
        <a href="">
          <FiFacebook className="cursor-pointer sidebar-icon  text-sm sm:text-md" />
        </a>
        <a href="">
          <FiTwitter className="cursor-pointer sidebar-icon  text-xs sm:text-sm" />
        </a>
      </div>
    </motion.section>
  )
}

const Article = ({ image, heading, text }) => {
  const item = {
    hidden: { x: '-10%', opacity: 0 },
    visible: {
      x: '0%',
      opacity: 1,
      transition: {
        ease: [0.6, 0, 0.1, 1],
        duration: 0.4,
        delay: 0.2,
      },
    },
    exit: {
      x: '-10%',
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <motion.article variants={item} className="flex flex-col gap-4">
      <img className="w-full aspect-video object-cover" src={image} alt="" />
      <h3 className="font-bold">{heading}</h3>
      <p className="text-sm">{text}</p>
    </motion.article>
  )
}
export default WhatHappeningSidePopup
