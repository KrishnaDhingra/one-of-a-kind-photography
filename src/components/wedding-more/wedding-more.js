import React from 'react'

function WeddingMore({ scrollRef }) {
  return (
    <section className="my-[5rem] px-4 sm:px-6" ref={scrollRef}>
      <h1 className="text-[48px] font-medium">Wedding Photography</h1>
      <p className="mt-3">
        Marriages are made in heaven, celebrated on land witnessed by
        photographers. We freeze your moments into frames transcending time.
        Make you relive your big day every time you see it again in a cinematic
        way. Let's film your unscripted love tale to make the spectators fall in
        love every time they see it.
      </p>
    </section>
  )
}
export default WeddingMore
