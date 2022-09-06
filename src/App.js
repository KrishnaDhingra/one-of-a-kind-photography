import React, { useState, useEffect } from 'react'
import './App.css'
import { AnimatePresence } from 'framer-motion'
import { BsWhatsapp } from 'react-icons/bs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Enter from './components/enter/Enter'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home'
import FAQ from './components/faq/faq'
import Wedding from './pages/wedding'
import Services from './pages/services'
import Gallery from './pages/gallery'
import Outdoor from './pages/outdoor'
import Blog from './components/blog/blog'
import Pricing from './components/pricing/pricing'
import Footer from './components/footer/footer'
import AboutUs from './pages/aboutUs'
import Videos from './pages/videos'
import Careers from './components/careers/careers'
import GetInTouchChennai from './pages/get-in-touch-chennai'
import GetInTouchBangalore from './pages/get-in-touch-bangalore'
import GetInTouchCoimbatore from './pages/get-in-touch-coimbatore'
import BookNow from './pages/book-now'
import Video from './components/video/video'
import ImageGallery from './components/image-gallery/image-gallery'
import DetailBlog from './pages/detailBlog'
import { Helmet } from 'react-helmet'
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  return (
    <BrowserRouter>
      <ScrollToTop>
        <AnimatePresence>
          {loading ? (
            <Enter key="enter-animation" />
          ) : (
            <>
              <Helmet>
                <meta
                  http-equiv="Content-Type"
                  content="text/html; charset=UTF-8"
                />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, maximum-scale=1"
                />
                <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
                <title>
                  Wedding Photographers | candid wedding photographer | One of a
                  Kind Photography
                </title>
                <meta
                  name="description"
                  content="One of a Kind Photography: Has professional Candid wedding photographers in Chennai, Bangalore etc for Couple candid wedding photography, Pre/Post Wedding Photography"
                />
                <meta name="robots" content="max-image-preview:large" />
                {/* <link rel="canonical" href="https://oneofakindphotography.in/" /> */}
              </Helmet>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/enter" element={<Enter />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/wedding-photography" element={<Wedding />} />
                <Route path="/photographyservices" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route
                  path="/outdoor-wedding-photography"
                  element={<Outdoor />}
                />
                <Route path="/blog" element={<Blog />} />
                <Route path="/detail-blog/:id" element={<DetailBlog />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/book-now" element={<BookNow />} />
                <Route path="/image-gallery/:id" element={<ImageGallery />} />
                <Route
                  path="/wedding-photography-in-chennai"
                  element={<GetInTouchChennai />}
                />
                <Route
                  path="/wedding-photography-in-bangalore"
                  element={<GetInTouchBangalore />}
                />
                <Route
                  path="/wedding-photography-in-coimbatore"
                  element={<GetInTouchCoimbatore />}
                />
                <Route path="/videos/:id" element={<Video />} />
              </Routes>
              <Footer />
              <a href="https://wa.me/+917788995566" target="_blank">
                <BsWhatsapp className="fixed top-[92vh] sm:top-[85vh] right-[30px] sm:right-[50px] fixed-whatsapp-icon text-white bg-green-500 rounded-full text-[3rem] sm:text-[3.5rem] p-2" />
              </a>
            </>
          )}
        </AnimatePresence>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App
