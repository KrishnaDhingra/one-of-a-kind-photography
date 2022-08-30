import React from 'react'
import './who-are-we.css'
import { data } from './data'
import { LazyLoadImage } from 'react-lazy-load-image-component'
function WhoAreWe() {
  return (
    <main className="mx-auto who-are-we-container">
      <article className="px-4 md:px-0 col-start-1 col-end-2">
        <h1 className="text-[48px] lg:text-[60px] font-medium">Who are we?</h1>
        <p className="mt-3 text-[15px]">
          We are a bunch of crazy yet industry-best photographers with an eye
          for creativity to give you a one of a kind photography experience.
          Every wedding is a romantic film unscripted. One of a kind photography
          will be your wedding photography partner to capture and tape every
          emotion, culture, tradition, and romance in your wedding film.
        </p>
      </article>

      <div className="who-are-we-side-articles-container">
        {data.map((item, index) => {
          return (
            <article className="flex flex-col gap-3" key={index}>
              <img
                className="self-start"
                alt={item.subheading}
                src={item.image}
                loading="lazy"
              />
              <h4 className="font-medium">{item.subheading}</h4>
              <p className="text-[15px]">{item.text}</p>
            </article>
          )
        })}
      </div>
    </main>
  )
}
export default WhoAreWe
