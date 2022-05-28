import React from 'react'
import AboutUsTopSectionImage from '../../utilities/pricing-big-image2.png'
import './about-us-top-section.css'

function AboutUsTopSection() {
  return (
    <section className="about-us-top-section-container flex flex-col gap-12">
      <h1 className="about-us-heading text-center">About Us</h1>
      <div className="main-content px-8 md:px-0">
        <p>
          Born in late 2014, One of a kind is a wedding photography and candid
          wedding photography business franchise that is the brainchild of Vikas
          Alagarsamy and Navya, coupled with a mutual love for wedding
          photography and an insatiable curiosity for anything creative. Mr.
          Vikas Alagarsamy was also a Former Founder of Zero gravity
          Photography. OOAK is an internationally acclaimed Candid Wedding
          Photography Studio with an impeccable team of exuberant wedding
          photographers. We like taking the unconventional road and utilizing
          out-of-the-box ideas.
        </p>

        <img
          className="w-full object-cover aspect-video rounded-2xl"
          src={AboutUsTopSectionImage}
          alt="About Us Photo"
        />
      </div>
    </section>
  )
}
export default AboutUsTopSection
