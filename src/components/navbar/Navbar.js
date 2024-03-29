import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRegBell } from 'react-icons/fa'
import { BiHomeAlt } from 'react-icons/bi'
import { ulVariants } from './ulVariants'
import NavbarLogo from '../../utilities/navbar-logo.webp'
import Backdrop from '../backdrop'
import NavbarLink from './NavbarLink'
import SubMenuLink from './SubMenuLink'
import WhatHappeningSidePopup from '../what-happening-sidepopup/what-happening-sidepopup'

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false)
  const [sidebarVisible, setSideBarVisible] = useState(false)

  let toggleNavbarVisibility = () => {
    setNavbarVisible(false)
  }
  let toggleSideBarVisibility = () => {
    setSideBarVisible(false)
  }

  return (
    <>
      <nav className="z-100">
        <AnimatePresence>
          {navbarVisible && (
            <Backdrop onSelect={toggleNavbarVisibility}>
              <motion.ul
                onClick={(e) => e.stopPropagation()}
                variants={ulVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <section className="sm:px-[1rem] lg:px-[3rem]">
                  <NavbarLink
                    onClick={toggleNavbarVisibility}
                    text={'About us'}
                    redirect={'/aboutus'}
                  />
                  <NavbarLink
                    onClick={toggleNavbarVisibility}
                    text={'Services'}
                    redirect={'/services'}
                  />
                    <NavbarLink
                      onClick={toggleNavbarVisibility}
                      text={'Pricing'}
                      redirect={'/pricing'}
                    />
                    <NavbarLink
                      onClick={toggleNavbarVisibility}
                      text={'Book Now'}
                      redirect={'/book-now'}
                    />
                  <NavbarLink
                    onClick={toggleNavbarVisibility}
                    text={'Jobs'}
                    redirect={'/careers'}
                  />
                  <SubMenuLink
                    onClick={toggleNavbarVisibility}
                    mainLink={{ text: 'Gallery', redirect: '/gallery' }}
                    subLinks={[
                      { text: 'Wedding', redirect: '/wedding' },
                      { text: 'Outdoor', redirect: '/outdoor' },
                      { text: 'Videos', redirect: '/videos' },
                    ]}
                  />
                  <SubMenuLink
                    onClick={toggleNavbarVisibility}
                    mainLink={{ text: 'Location', redirect: null }}
                    subLinks={[
                      { text: 'Chennai', redirect: '/get-in-touch-chennai' },
                      {
                        text: 'Coimbatore',
                        redirect: '/get-in-touch-coimbatore',
                      },
                      {
                        text: 'Bangalore',
                        redirect: '/get-in-touch-bangalore',
                      },
                    ]}
                  />
                </section>
              </motion.ul>
            </Backdrop>
          )}
        </AnimatePresence>

        <section className="px-[1rem] mt-[-1.4rem] sm:mt-[0rem] sm:px-[2rem] lg:px-[3rem]">
          <div className="flex relative">
            <FaRegBell
              className="bell text-2xl cursor-pointer"
              data-visible={navbarVisible}
              onClick={() => {
                setNavbarVisible(false)
                setSideBarVisible(true)
              }}
            />

            {navbarVisible && (
              <Link to="/">
                <BiHomeAlt
                  className={`home-icon shrink-0 text-2xl absolute top-0 left-[170%] sm:left-[200%]`}
                  onClick={() => {
                    setNavbarVisible(false)
                  }}
                />
              </Link>
            )}
          </div>
          <Link to="/">
            <div className="logo" onClick={() => setNavbarVisible(false)}>
              <img className="max-w-[7.7rem]" src={NavbarLogo} alt="" />
            </div>
          </Link>
          <div
            className="hamburger cursor-pointer"
            data-visible={navbarVisible}
            onClick={() => {
              setSideBarVisible(false)
              setNavbarVisible(!navbarVisible)
            }}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </section>
      </nav>
      <AnimatePresence>
        {sidebarVisible && (
          <WhatHappeningSidePopup onSelect={toggleSideBarVisibility} />
        )}
      </AnimatePresence>
    </>
  )
}
export default Navbar
