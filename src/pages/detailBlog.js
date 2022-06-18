import React, { useState, useEffect } from 'react'
import sanityClient from '../client'
import { useParams } from 'react-router-dom'
export default function DetailTrendingBlog() {
  const [blogs, setBlogs] = useState([])
  const [blogHeading, setBlogHeading] = useState('')
  const { id } = useParams()
  useEffect(() => {
    console.log(id)
    sanityClient
      .fetch(
        `*[_id == "${id}"] {
          detailBlogHeading,
          'subBlogs': subBlogs[]{
            heading, 
            content,
            mainImage{
              asset->{
                url
              }
            }
        },
  }`,
      )
      .then((data) => {
        console.log(data)
        // the data is present in an Array of objects. so we loop over through that array to get first object that contains the subBlogs key that holds an array of two objects that is the content itself
        setBlogHeading(data[0].detailBlogHeading)
        data.forEach((item) => {
          item.subBlogs.forEach((item) => {
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
      })
      .catch(console.log)
  }, [])

  return (
    <section className="mt-[3rem] mx-auto w-[95%] max-w-[1150px]">
      <h1 className="text-center text-[48px] font-medium mb-[4rem] ">
        {blogHeading}
      </h1>
      {blogs.length != 0 &&
        blogs.map((blog, index) => {
          return (
            <article className="flex flex-col gap-12 mb-16" key={index}>
              <h1 className="px-4 md:px-0 text-[36px] font-medium">
                {blog.heading}
              </h1>
              <img
                className="px-4 md:px-0 mx-auto rounded-2xl w-full sm:max-w-[27rem] object-cover aspect-video"
                src={blog.mainImage}
                alt={`${blog.heading} main image`}
              />
              <p className="leading-[30px] px-4 md:px-0">{blog.content}</p>
            </article>
          )
        })}
    </section>
  )
}
