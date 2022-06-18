import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../../client'
function BlogInfo() {
  const [blogInfo, setBlogInfo] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"] {
          _id,
        blogImage{
            asset->{
              url
            }
        },
        categoryName,
        heading,
        nameofthewriter,
        designation,
        detailBlogHeading,
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
              id: item._id,
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
      {blogInfo.length != 0 &&
        blogInfo.map((item, index) => {
          return (
            <Link to={`/detail-blog/${item.id}`}>
              <article key={index}>
                <div className="mb-6">
                  <img
                    className="w-full aspect-video object-cover rounded-[15px]"
                    src={item.image}
                    alt=""
                  />
                </div>
                <section className="blog-info">
                  <h4 className="text-[14px] font-medium">
                    {item.categoryName}
                  </h4>
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
                      <h4 className="font-regular">
                        {item.name_of_the_writer}
                      </h4>
                      <p className="font-regular text-gray-600">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </section>
              </article>
            </Link>
          )
        })}
      {blogInfo.length == 0 &&
        [1, 2, 3, 4, 5, 6].map((element, index) => {
          return <BlogInfoSkeleton key={index} />
        })}
    </>
  )
}

const BlogInfoSkeleton = () => {
  return (
    <article className="flex flex-col gap-[0.3rem]">
      <div className="mb-3 w-full aspect-video rounded-[15px] bg-gray-300"></div>
      <div className="w-[70%] h-[1.4rem] bg-gray-300"></div>
      <div className="w-[80%] h-[1.7rem] bg-gray-300"></div>
      <div className="mt-3 bottom-container flex gap-4">
        <div className="h-full aspect-square rounded-full bg-gray-300"></div>
        <div className="bottom-right-container w-full flex flex-col gap-[0.3rem]">
          <div className="w-[60%] h-[1.3rem] bg-gray-300"></div>
          <div className="w-[60%] h-[1.1rem] bg-gray-300"></div>
        </div>
      </div>
    </article>
  )
}
export default BlogInfo
