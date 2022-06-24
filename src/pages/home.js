import React from 'react'
import HomeTopBar from '../components/home-top-bar/HomeTopBar'
import HomeBigButton from '../components/HomeBigButton/homebigbutton'
import Counter from '../components/counter/counter'
import WhoAreWe from '../components/who-are-we/who-are-we'
import HomePhotoSamplesContainer from '../components/home-photo-samples/home-photo-samples'
import Testimonials from '../components/testimonials/testimonials'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <main className="relative flex flex-col mt-[3rem] sm:mt-[6rem]">
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <title>
          Wedding Photographers | candid wedding photographer | One of a Kind
          Photography
        </title>
        <meta
          name="description"
          content="One of a Kind Photography: Has professional Candid wedding photographers in Chennai, Bangalore etc for Couple candid wedding photography, Pre/Post Wedding Photography"
        />
        <meta name="robots" content="max-image-preview:large" />
        {/* <link rel="canonical" href="https://oneofakindphotography.in/" /> */}
      </Helmet>
      <HomeTopBar />
      <HomeBigButton />
      <Counter />
      <WhoAreWe />
      <HomePhotoSamplesContainer />
      <Testimonials />
    </main>
  )
}
export default Home
