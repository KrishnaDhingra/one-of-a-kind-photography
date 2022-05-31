import React from 'react'
import CareersTopSectionImage from '../../utilities/careers-top-section-image.jpg'
import BookNowSlider from '../book-now-slider/book-now-slider'
import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineYoutube } from 'react-icons/ai'
import './careers.css'

function Careers() {
  return (
    <main className="flex flex-col">
      <section className="jobs-top-section-container flex flex-col gap-12">
        <h1 className="jobs-heading text-center">Careers</h1>
        <div className="main-content px-8 md:px-0">
          <div>
            <h1 className="wedding-photographer-heading font-medium mb-4">
              Wedding Photographer
            </h1>
            <p>
              Are you a keen observer, giving importance to all the intricate
              details around you? With an eye for being creative? We invite you
              to join our studio to be a part of a larger goal; focus on your
              photography without the hassles of being an independent
              professional. Grow, learn and be inspired while working in the
              company of people who are as passionate about photography as you
              are; be a part of weddings that inspire you to create stories.
            </p>
          </div>

          <img
            className="w-full object-cover aspect-video rounded-2xl"
            src={CareersTopSectionImage}
            alt="Careers Photo"
          />
        </div>
      </section>
      <section className="rounded-t-3xl grow-with-us-container">
        <div className="grow-with-us px-8 md:px-0">
          <div className="flex flex-col gap-8">
            <h2 className="font-semibold">Grow With Us!</h2>
            <p className="hidden sm:block">
              A good leader is one who creates more leaders, let’s make imprints
              together.
            </p>
            <div className="hidden social-icons-container sm:flex gap-7">
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

          <form action="" className="grow-with-us-form">
            <input required={true} type="text" placeholder="First Name" />
            <input required={true} type="text" placeholder="Last Name" />
            <input required={true} type="email" placeholder="Email" />
            <input required={true} type="text" placeholder="Phone" />
            <input
              required={true}
              className="describe-yourself"
              type="text"
              placeholder="Describe yourself"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
      <BookNowSlider />
    </main>
  )
}
export default Careers
