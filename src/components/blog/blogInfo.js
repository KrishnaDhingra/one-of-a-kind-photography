import React, { useState, useEffect } from 'react'
import sanityClient from '../../client'
function BlogInfo() {
  const [blogInfo, setBlogInfo] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"] {
        blogImage{
            asset->{
              url
            }
        },
        categoryName,
        heading,
        nameofthewriter,
        designation,
        writerImage{
            asset->{
              url
            }
        }
    }`,
      )
      .then((data) => {
        data.forEach((item) => {
          setBlogInfo((prev) => [
            ...prev,
            {
              image: item.blogImage.asset.url,
              categoryName: item.categoryName,
              heading: item.heading,
              name_of_the_writer: item.nameofthewriter,
              designation: item.designation,
              writerImage: item.writerImage.asset.url,
            },
          ])
        })
      })
      .catch(console.log)
  }, [])

  return (
    <>
      {blogInfo.map((item, index) => {
        return (
          <article key={index}>
            <div className="mb-6">
              <img
                className="w-full aspect-video object-cover rounded-[15px]"
                src={item.image}
                alt=""
              />
            </div>
            <section className="blog-info">
              <h4 className="text-[14px] font-medium">{item.categoryName}</h4>
              <h3 className="text-[20px] font-medium">{item.heading}</h3>
              <div className="mt-3 bottom-container flex gap-4">
                <div className="bottom-container-image">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={item.writerImage}
                    alt="writer image"
                  />
                </div>
                <div className="bottom-right-container">
                  <h4 className="font-regular">{item.name_of_the_writer}</h4>
                  <p className="font-regular text-gray-600">
                    {item.designation}
                  </p>
                </div>
              </div>
            </section>
          </article>
        )
      })}
    </>
  )
}

export default BlogInfo