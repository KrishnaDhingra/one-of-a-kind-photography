import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { itemVariants } from './itemVariants'
function SubMenuLink({ onClick, mainLink, subLinks }) {
  const [subMenuVisible, setSubMenuVisible] = useState(false)

  const parentVariants = {
    hidden: false,
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  }
  return (
    <div className="flex flex-col relative">
      <motion.li
        className="font-semibold flex gap-4 cursor-pointer"
        variants={itemVariants()}
      >
        {mainLink.redirect ? (
          <Link to={mainLink.redirect} className="font-medium">
            {mainLink.text}
          </Link>
        ) : (
          <span className="font-medium">{mainLink.text}</span>
        )}
        <IoIosArrowBack
          className="hover:text-gray-600 -rotate-90"
          onClick={() => setSubMenuVisible(!subMenuVisible)}
        />
      </motion.li>
      <AnimatePresence>
        {subMenuVisible && (
          <motion.div
            variants={parentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative sm:absolute top-[130%] sm:left-[-20%] flex flex-col my-3 sm:my-0 sm:flex-row gap-3"
          >
            {subLinks.map((item, index) => {
              return (
                <motion.div
                  onClick={onClick}
                  key={index}
                  className="text-sm text-center"
                  variants={itemVariants()}
                >
                  <Link to={item.redirect}>{item.text}</Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default SubMenuLink
