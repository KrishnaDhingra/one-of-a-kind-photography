import React from 'react'
import WhoAreWe from '../who-are-we/who-are-we'
function ServicesMore({ scrollRef }) {
  return (
    <div ref={scrollRef}>
      <WhoAreWe ref={scrollRef} />
    </div>
  )
}
export default ServicesMore
