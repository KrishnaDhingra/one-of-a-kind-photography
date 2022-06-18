import React, { useState, useEffect } from 'react'
import './image-gallery.css'
import sanityClient from '../../client'
function ImageGallery() {
  const [imageUrls, setImageUrls] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "imageGallery"] {
      mainImage{
          asset->{
            url
          }
      }
    }`,
      )
      .then((data) => {
        data.forEach((item) => {
          setImageUrls((prev) => [...prev, item.mainImage.asset.url])
        })
      })
      .catch(console.log)
  }, [])

  return (
    <section id="photos">
      {imageUrls.length !== 0 &&
        imageUrls.map((item) => {
          return <img src={item} alt="" />
        })}
    </section>
  )
}
export default ImageGallery
