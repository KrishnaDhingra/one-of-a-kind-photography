import React from 'react'
import './book-now-founders-note.css'
import FounderImage from '../../utilities/co-founder-image.png'
import FoundersNoteSignatureImage from '../../utilities/founders-note-signature.png'
import { BsInstagram } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineYoutube } from 'react-icons/ai'

function BookNowFoundersNote({}) {
  return (
    <section className="book-now-founders-note-container rounded-3xl md:rounded-t-3xl">
      <div className="inner-container flex flex-col px-8 md:px-0">
        <div className="flex flex-col gap-8 items-center">
          <div className="bg-white h-[170px] w-[170px] rounded-full overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={FounderImage}
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
        <div className="flex flex-col items-center gap-10 md:gap-14">
          <h1 className="relative founders-note-heading text-[24px] text-center md:text-[36px] font-semibold">
            Founders Note
          </h1>
          <p className="leading-[26px]">
            There’s nothing more incredible than finding the one person you
            can’t live without. Your true best friend. I want to photograph this
            connection. Whether we adventure somewhere beautiful together or
            explore the intimacy of your own home, I want to capture the true
            versions of you. Don’t hold back. You only get this moment once. You
            be you, I’ll be me. Let’s create something real. Capturing true love
            with all its flaws, not the idea of some kind of boring perfection.
            When it comes to my approach, I channel every image through the lens
            of the love I have for my own family. If you're looking for a
            photographer who relishes the polished + proper portraits, then
            you've come to the wrong place. I'm all about the in-between
            moments; I thrive in the details. I'm Vikas Alagarsamy IF YOU LIKE
            UNCONVENTIONAL, HONEST, RAW, AND REAL PHOTOS, I’M YOUR PERSON. My
            heart is to always give what I believe is most important for you to
            receive. Let's focus on what means most to you. That’s how we tick.
            Snoop around our site and insta-feed to see if this could be a match
            (we hope it is!).
          </p>
          <img src={FoundersNoteSignatureImage} alt="Founder Signature Image" />
        </div>
      </div>
    </section>
  )
}
export default BookNowFoundersNote
