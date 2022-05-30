import React, { useState, useEffect } from 'react'
import TrendingImage from '../../utilities/trending-image.png'
import sanityClient from '../../client'

function TrendingInfo() {
  const [trendingInfo, setTrendingInfo] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "trendingBlog"] {
          trendingImage{
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
        console.log(data)
        data.forEach((item) => {
          setTrendingInfo((prev) => [
            ...prev,
            {
              image: item.trendingImage.asset.url,
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
      {trendingInfo.length !== 0 && (
        <article className="trending-container">
          <div>
            <img
              className="trending-image object-cover max-w-[279px] w-full aspect-video rounded-[15px]"
              src={trendingInfo[0].image}
              alt=""
            />
          </div>
          <section className="trending-info">
            <h3 className="text-[14px] sm:text-[20px] font-medium">
              {trendingInfo[0].categoryName}
            </h3>
            <h1 className="text-[20px] sm:text-[48px] font-medium">
              {trendingInfo[0].heading}
            </h1>
            <div className="mt-3 bottom-container flex gap-4">
              <div className="bottom-container-image">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={trendingInfo[0].writerImage}
                  alt="writer image"
                />
              </div>
              <div className="bottom-right-container">
                <h4 className="font-regular">
                  {trendingInfo[0].name_of_the_writer}
                </h4>
                <p className="font-regular text-gray-600">
                  {trendingInfo[0].designation}
                </p>
              </div>
            </div>
          </section>
        </article>
      )}
    </>
  )
}

export default TrendingInfo
