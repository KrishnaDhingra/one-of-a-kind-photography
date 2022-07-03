import React, { useState, useEffect } from 'react'
import './image-gallery.css'
import sanityClient from '../../client'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function ImageGallery() {
  const [imageUrls, setImageUrls] = useState([])

  useEffect(() => {
    let cancel = false
    sanityClient
      .fetch(
        `*[_type == "imageGallery"] {
          mainImage{
              asset->{
                url
              }
          },
      }`,
      )
      .then((data) => {
        if (cancel) return
        data.forEach((item) => {
          setImageUrls((prev) => [...prev, item.mainImage.asset.url])
        })
      })
      .catch((error) => {
        console.log(error)
      })

    return () => {
      cancel = true
    }
  }, [])

  return (
    <section id="photos">
      {imageUrls.length !== 0 &&
        imageUrls.map((item, index) => {
          return (
            <LazyLoadImage
              key={index}
              alt={`Image gallery Photograph${index}`}
              src={item}
              width="100%"
              height="100%"
            />
          )
        })}
    </section>
  )
}
export default ImageGallery
