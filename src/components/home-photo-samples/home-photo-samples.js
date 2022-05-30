import React from 'react'
import './home-photo-samples.css'
import { data } from './home-photo-samples-data'
import { Link } from 'react-router-dom'
import SamplePhoto from '../../utilities/sample-photo.png'

function HomePhotoSamplesContainer() {
  return (
    <section className="main-samples-container">
      {data.map((item, index) => {
        return (
          <div className="samples-inner" key={index}>
            <div className="background"></div>
            <div className="content-container px-8 md:px-12 md:gap-[3.5rem] xl:gap-0 xl:px-[4.5rem]">
              <div className="flex flex-col gap-4">
                <h3 className="content-heading font-medium text-[20px]">
                  {item.heading}
                </h3>
                <p className="content">{item.text}</p>
                <Link to={'#'} className="discover font-medium">
                  Discover +
                </Link>
              </div>
              <div className="sample-image-container">
                <img src={SamplePhoto} alt="" />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
export default HomePhotoSamplesContainer
