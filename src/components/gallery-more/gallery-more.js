import React from 'react'

function GalleryMore({ scrollRef }) {
  return (
    <section className="my-[5rem] px-4 sm:px-6" ref={scrollRef}>
      <h1 className="text-[48px] font-medium">Latest Photographs</h1>
      <p className="mt-3">
        We have a beautiful and spacious photo studio. This is ideal for
        photographing pack shots, paintings, products or people. Different
        backgrounds are available, daylight comes in sideways and there is an
        extensive flash installation
      </p>
    </section>
  )
}
export default GalleryMore
