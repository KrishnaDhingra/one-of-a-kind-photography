import React, { useState, useEffect } from 'react'
import './App.css'
import { AnimatePresence } from 'framer-motion'
import { BsWhatsapp } from 'react-icons/bs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Enter = React.lazy(() => import('./components/enter/Enter'))
const Navbar = React.lazy(() => import('./components/navbar/Navbar'))
const Pricing = React.lazy(() => import('./components/pricing/pricing'))
const Home = React.lazy(() => import('./pages/home'))
const FAQ = React.lazy(() => import('./components/faq/faq'))
const Wedding = React.lazy(() => import('./pages/wedding'))
const Services = React.lazy(() => import('./pages/services'))
const Gallery = React.lazy(() => import('./pages/gallery'))
const Outdoor = React.lazy(() => import('./pages/outdoor'))
const Blog = React.lazy(() => import('./components/blog/blog'))
const Footer = React.lazy(() => import('./components/footer/footer'))
const AboutUs = React.lazy(() => import('./pages/aboutUs'))
const Careers = React.lazy(() => import('./components/careers/careers'))
const BookNow = React.lazy(() => import('./pages/book-now'))
const Videos = React.lazy(() => import('./pages/videos'))
const Video = React.lazy(() => import('./components/video/video'))
const GetInTouchChennai = React.lazy(() =>
  import('./pages/get-in-touch-chennai'),
)
const GetInTouchCoimbatore = React.lazy(() =>
  import('./pages/get-in-touch-coimbatore'),
)
const GetInTouchBangalore = React.lazy(() =>
  import('./pages/get-in-touch-bangalore'),
)
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  })

  return (
    <React.Suspense fallback={<span>....Loading</span>}>
      <BrowserRouter>
        <AnimatePresence>
          {loading ? (
            <Enter key="enter-animation" />
          ) : (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/enter" element={<Enter />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/wedding" element={<Wedding />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/outdoor" element={<Outdoor />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/book-now" element={<BookNow />} />
                <Route
                  path="/get-in-touch-chennai"
                  element={<GetInTouchChennai />}
                />
                <Route
                  path="/get-in-touch-bangalore"
                  element={<GetInTouchBangalore />}
                />
                <Route
                  path="/get-in-touch-coimbatore"
                  element={<GetInTouchCoimbatore />}
                />
                <Route path="/videos/:id" element={<Video />} />
              </Routes>
              <Footer />
              <BsWhatsapp className="fixed-whatsapp-icon text-white bg-green-600 rounded-full text-[4rem] p-4" />
            </>
          )}
        </AnimatePresence>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App
