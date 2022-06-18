import React, { useState, useEffect } from 'react'
import sanityClient from '../client'
export default function DetailBlog() {
  const [blogs, setBlogs] = useState([])
  const [header, setHeader] = useState(null)
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "detailBlog"] {
          heading,
          content,
          mainImage{
            asset->{
              url
            }
        },
  }`,
      )
      .then((data) => {
        console.log(data)
        data.forEach((item) => {
          setBlogs((prev) => [
            ...prev,
            {
              heading: item.heading,
              content: item.content,
              mainImage: item.mainImage.asset.url,
            },
          ])
        })
      })
      .catch(console.log)

    sanityClient
      .fetch(
        `*[_type == "detailBlogHeader"] {
          heading,
          mainImage{
            asset->{
              url
            }
          },
          nameOfWriter,
          designation,
          writerImage{
            asset->{
              url
            }
          },
          categoryName,
          date
        },
  }`,
      )
      .then((data) => {
        console.log(data)
        data.forEach((item) => {
          setHeader({
            heading: item.heading,
            mainImage: item.mainImage.asset.url,
            nameOfWriter: item.nameOfWriter,
            designation: item.designation,
            writerImage: item.writerImage.asset.url,
            categoryName: item.categoryName,
            date: item.date,
          })
        })
      })
      .catch(console.log)
  }, [])

  return (
    <section className="mt-[5rem] mx-auto w-[95%] max-w-[1150px]">
      {header && (
        <>
          <h1 className="text-center text-[36px] md:text-[48px] font-medium mb-20">
            {header.heading}
          </h1>

          <div className="mx-auto px-4 md:px-0 max-w-[32rem] flex flex-col gap-4">
            <img
              className="w-full rounded-2xl object-cover aspect-video"
              src={header.mainImage}
              alt={`${header.heading} main image`}
            />

            <div className="flex gap-4">
              {/* start here by writing styles for the bottom container of blog header */}
              <div className="h-[4rem] w-[4rem]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={header.writerImage}
                  alt="writer image"
                />
              </div>
              <div className="flex flex-col gap-1 justify-center">
                <h4 className="font-regular">{header.nameOfWriter}</h4>
                <p className="font-regular text-gray-600">
                  {header.designation}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      {blogs.length != 0 &&
        blogs.map((blog, index) => {
          return (
            <article className="flex flex-col gap-12 mb-16" key={index}>
              <h1 className="text-[32px] md:text-[36px] font-medium">
                {blog.heading}
              </h1>
              <img
                className="px-4 md:px-0 mx-auto rounded-2xl max-w-[30rem] object-cover aspect-video"
                src={blog.mainImage}
                alt={`${blog.heading} main image`}
              />
              <p className="leading-[30px] px-8 md:px-0">{blog.content}</p>
            </article>
          )
        })}
    </section>
  )
}
