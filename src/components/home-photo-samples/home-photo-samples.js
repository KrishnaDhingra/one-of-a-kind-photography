import React, { useState, useEffect } from 'react'
import './home-photo-samples.css'
import { data } from './home-photo-samples-data'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import sanityClient from '../../client'

function HomePhotoSamplesContainer() {
  const [imageUrls, setImageUrls] = useState(null)
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "homePhotoSamples"] {
      weddingPhotography{
          asset->{
            url
          }
      },
      maternityShoot{
          asset->{
            url
          }
      },
      birthPhotography{
          asset->{
            url
          }
      },
      specialEvents{
          asset->{
            url
          }
      },
  }`,
      )
      .then((data) => {
        data.forEach((item) => {
          setImageUrls([
            item.weddingPhotography.asset.url,
            item.maternityShoot.asset.url,
            item.birthPhotography.asset.url,
            item.specialEvents.asset.url,
          ])
        })
      })
      .catch(console.log)
  }, [])

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
                <p className="content text-justify">{item.text}</p>
              </div>
              <div className="sample-image-container">
                {imageUrls && (
                  <img
                    alt={`Home photo sample ${index}`}
                    src={imageUrls[index]}
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                )}
                {!imageUrls && (
                  <div className="bg-gray-300 h-full w-full"></div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
export default HomePhotoSamplesContainer
