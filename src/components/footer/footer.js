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
          <Link to="/">
            <img
              src={FooterLogo}
              className="inline-block w-[17rem] mt-[-5rem] mb-[-4.9rem] ml-[-2.4rem]"
              alt="Footer Logo"
            />
          </Link>
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
          <div className="flex flex-col gap-6">
            <div className="flex gap-[1.5rem]">
              <BsMailbox2 className="shrink-0" />
              <ul className="flex flex-wrap gap-[0.5rem]">
                <li>
                  <Link className="ml-0" to={'/get-in-touch-chennai'}>
                    Chennai |
                  </Link>
                </li>
                <li>
                  <Link className="ml-0" to={'/get-in-touch-coimbatore'}>
                    Coimbatore |
                  </Link>
                </li>
                <li>
                  <Link className="ml-0" to={'/get-in-touch-bangalore'}>
                    Bangalore |
                  </Link>
                </li>
                <li className="ml-0">Hyderabad |</li>
                <li className="ml-0"> Malaysia |</li>
                <li className="ml-0"> United States</li>
              </ul>
            </div>
            <a href="mailto:vikas@ooak.photography" target="_blank">
              <IoMailOpen />
              <span>vikas@ooak.photography</span>
            </a>
            <a href="tel:+917788995566" target="_blank">
              <BsFillTelephoneFill />
              <span>+91 77889 95566</span>
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <div>
            {[
              { text: 'FAQ', redirect: 'faq' },
              { text: 'Blogs', redirect: 'blog' },
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
