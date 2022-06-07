import React from 'react'
import AboutUsTopSectionImage from '../../utilities/sample-image2.webp'
import './about-us-top-section.css'

function AboutUsTopSection() {
  return (
    <section className="about-us-top-section-container flex flex-col gap-12">
      <h1 className="about-us-heading text-center">About Us</h1>
      <div className="main-content px-8 md:px-0">
        <p>
          There is no such a thing as a perfect love story or a perfect wedding.
          That’s what we know after being in business for nearly a decade. And
          you know what? For exactly this reason we love doing what we do.
          Unexpected moments, rollercoaster emotions, and beautiful souls crazy
          in love make our hearts beat faster. With our work, we are following
          couples worldwide, capturing these vibrant memories you’ll carry with
          you for decades to come.
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
