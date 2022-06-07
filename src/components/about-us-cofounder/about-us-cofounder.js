import React from 'react'
import './about-us-cofounder.css'
import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineYoutube } from 'react-icons/ai'

function AboutUsCoFounder({ heading, text, image }) {
  return (
    <section className="aboutus-cofounder-container rounded-3xl md:rounded-t-3xl">
      <div className="inner-container flex flex-col gap-[3rem]">
        <h1 className="text-[24px] text-center md:text-left md:text-[36px] font-medium">
          {heading}
        </h1>
        <div className="inner-container-content px-8 md:px-0">
          <div className="flex flex-col gap-8 items-center">
            <div className="bg-white h-[170px] w-[170px] rounded-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={image}
                alt=""
              />
            </div>
            <div className="flex gap-7">
              <a href="https://www.instagram.com/oneofakindphotography.in/">
                <BsInstagram className="cursor-pointer sidebar-icon  text-xs sm:text-sm" />
              </a>
              <a href="https://www.facebook.com/Oneofakindphotography.in">
                <FiFacebook className="cursor-pointer sidebar-icon  text-sm sm:text-md" />
              </a>
              <a href="https://twitter.com/weddingsbyooak">
                <FiTwitter className="cursor-pointer sidebar-icon  text-xs sm:text-sm" />
              </a>
              <a href="https://www.youtube.com/channel/UCdvGm_h_fmUzwemNMKXw2hA/videos">
                <AiOutlineYoutube className="cursor-pointer sidebar-icon  text-xs sm:text-sm" />
              </a>
            </div>
          </div>
          <p className="leading-[30px]">{text}</p>
        </div>
      </div>
    </section>
  )
}
export default AboutUsCoFounder
