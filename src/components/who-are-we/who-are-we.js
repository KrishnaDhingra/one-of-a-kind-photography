import React from 'react'
import './who-are-we.css'
import { data } from './data'
function WhoAreWe() {
  return (
    <main className="mx-auto who-are-we-container">
      <article className="px-4 md:px-0 col-start-1 col-end-2">
        <h1 className="text-[48px] lg:text-[60px] font-semibold">
          Who are we?
        </h1>
        <p className="mt-3">
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
              <img className="self-start" src={item.image} alt="" />
              <h3 className="font-semibold">{item.subheading}</h3>
              <p>{item.text}</p>
              <h3 className="font-semibold">Discover +</h3>
            </article>
          )
        })}
      </div>
    </main>
  )
}
export default WhoAreWe
