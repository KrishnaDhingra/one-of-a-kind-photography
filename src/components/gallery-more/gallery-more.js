import React from 'react'

function GalleryMore({ scrollRef }) {
  return (
    <section className="my-[5rem] px-4 sm:px-6" ref={scrollRef}>
      <h1 className="text-[48px] font-medium">Gallery</h1>
      <p className="mt-3">
        If you want to know us better, take a look at our gallery to know about
        our unique craftsmanship and why we are unique in the industry.
        Experience a whole new dimension of creative photography with us.
      </p>
    </section>
  )
}
export default GalleryMore
