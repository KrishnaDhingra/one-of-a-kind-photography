import React, { useState, useEffect } from 'react'
import './image-gallery.css'
import sanityClient from '../../client'
import { useParams } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function ImageGallery() {
  const [imageUrls, setImageUrls] = useState([])
  const { id } = useParams()
  useEffect(() => {
    let cancel = false
    sanityClient
      .fetch(
        `*[_id == "${id}"] {
          image[]{
            asset->{
              url
            }
          }
      }`,
      )
      .then((data) => {
        if (cancel) return
        console.log(data[0].image)
        setImageUrls(data[0].image)
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
              src={item.asset.url}
              width="100%"
              height="100%"
            />
          )
        })}
    </section>
  )
}
export default ImageGallery
