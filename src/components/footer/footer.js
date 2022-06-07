import React from 'react'
import './footer.css'
import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineYoutube } from 'react-icons/ai'
import { BsMailbox2 } from 'react-icons/bs'
import { IoMailOpen } from 'react-icons/io5'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import FooterLogo from '../../utilities/logo.webp'

function Footer() {
  return (
    <footer className="home-footer px-[3rem] xl:px-[6.375rem]">
      <div className="footer-top gap-[4rem] xl:gap-[8rem]">
        <div>
          <img
            src={FooterLogo}
            className="inline-block w-[17rem] mt-[-5rem] mb-[-4.9rem] ml-[-2.4rem]"
            alt="Footer Logo"
          />
          <p>
            Every wedding has its own unique sense of style and personality, our
            cinematic approach is to be non-directorial and more observative
            while making our clients feel inspired, relaxed, and connected
          </p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/oneofakindphotography.in/">
              <BsInstagram className="cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/Oneofakindphotography.in">
              <FiFacebook className="cursor-pointer" />
            </a>
            <a href="https://twitter.com/weddingsbyooak">
              <FiTwitter className="cursor-pointer" />
            </a>
            <a href="https://www.youtube.com/channel/UCdvGm_h_fmUzwemNMKXw2hA/videos">
              <AiOutlineYoutube className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div>
          <h3>Contacts</h3>
          <div>
            <a href="#">
              <BsMailbox2 />
              <span>Banaswadi, Bangalore - 560033</span>
            </a>
            <a href="#">
              <IoMailOpen />
              <span>vikas@ooak.photography</span>
            </a>
            <a href="#">
              <BsFillTelephoneFill />
              <span>+91 77889 95566</span>
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div>
            {[
              { text: 'Weddings', redirect: 'wedding' },
              { text: 'Services', redirect: 'services' },
              { text: 'Gallery', redirect: 'gallery' },
              { text: 'Videos', redirect: 'videos' },
              { text: 'About Us', redirect: 'aboutus' },
              { text: 'Contact Us', redirect: 'book-now' },
            ].map((element, index) => {
              return (
                <Link
                  to={element.redirect}
                  className="cursor-pointer"
                  key={index}
                  href="#"
                >
                  {element.text}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      <div className="line"></div>
      <div className="bottom">
        <span className="copyright">
          Copyright © 2022 OOAK. All rights reserved
        </span>
        <div className="hidden xl:flex gap-[2.5rem]">
          {[
            'Weddings',
            'Engagement',
            'Birthdays',
            'Baby Shower',
            'Special Occassion',
          ].map((element, index) => {
            return (
              <a className="cursor-pointer" key={index} href="#">
                {element}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
export default Footer
