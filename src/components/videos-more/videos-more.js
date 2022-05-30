import React from 'react'

function VideosMore({ scrollRef }) {
  return (
    <section className="my-[5rem] px-4 sm:px-6" ref={scrollRef}>
      <h1 className="text-[48px] font-medium">Videos</h1>
      <p className="mt-3">
        Let's quickly run through our wedding films so you understand what a
        wedding film is and how we are going to craft your love story. Every
        wedding is a film unstaged.
      </p>
    </section>
  )
}
export default VideosMore
