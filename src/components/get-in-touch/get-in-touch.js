import React, { useState, useEffect } from 'react'
import './get-in-touch.css'
import { BsMailbox2 } from 'react-icons/bs'
import { IoMailOpen } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import sanityClient from '../../client'

function GetInTouch() {
  const [imageUrl, setImageUrl] = useState(null)
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "getInTouchImage"] {
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
          setImageUrl(item.mainImage.asset.url)
        })
      })
      .catch(console.log)
  }, [])

  return (
    <section className="get-in-touch-container flex flex-col gap-12">
      <h1 className="get-in-touch-heading text-center">Get In Touch</h1>
      <div className="main-content px-8 md:px-0">
        <div>
          <h1 className="text-[24px] md:text[36px] one-of-a-kind-heading font-medium mb-4">
            One of a kind Photography
          </h1>
          <p>
            We have worls-class, flexible support via live chat, email and hone.
            We guarantee that you’ll be able to have any issue resolved within
            24 hours.
          </p>
          <div className="social-info-container flex flex-col gap-6 text-md mt-7">
            <a href="#" className="flex gap-4 items-center">
              <BsMailbox2 />
              <span>Banaswadi, Bangalore - 560033</span>
            </a>
            <a href="#" className="flex gap-4 items-center">
              <IoMailOpen />
              <span>vikas@ooak.photography</span>
            </a>
            <a href="#" className="flex gap-4 items-center">
              <BsFillTelephoneFill />
              <span>+91 77889 95566</span>
            </a>
          </div>
        </div>

        {imageUrl && (
          <img
            className="w-full object-cover aspect-video rounded-2xl"
            src={imageUrl}
            alt="Careers Photo"
          />
        )}
        {!imageUrl && (
          <div className="w-full bg-gray-300 aspect-video rounded-2xl"></div>
        )}
      </div>
    </section>
  )
}
export default GetInTouch
