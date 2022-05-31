import React from 'react'
import './what-you-get-chart.css'
import { motion } from 'framer-motion'
import { data } from './what-you-get-chart-data'
import { FiCheckSquare } from 'react-icons/fi'

function WhatYouGetChart() {
  return (
    <main className="what-you-get-chart-container">
      <div className="what-you-get-sidebar">
        {data.map((item, index) => (
          <div className="sidebar-text-container" key={index}>
            <p className="px-4 text-center">{item.providing}</p>
          </div>
        ))}
      </div>
      <h3 className="basic-package-heading package-heading text-center rounded-tl-3xl bg-white pt-10">
        Basic Package
      </h3>
      <section className="basic-package-availability rounded-bl-3xl">
        {data.map((item) => {
          return (
            <div className="check-square">
              {typeof item.isBasicPackageAvailable !== 'boolean' ? (
                <span className="mx-auto text-[1.2rem]">
                  {item.isBasicPackageAvailable}
                </span>
              ) : (
                item.isBasicPackageAvailable === true && (
                  <FiCheckSquare className="text-[1.3rem] mx-auto cursor-pointer" />
                )
              )}
            </div>
          )
        })}
      </section>
      <h3 className="customized-package-heading package-heading text-center rounded-tr-3xl bg-white pt-10">
        Customized Package
      </h3>
      <section className="customized-package-availability rounded-br-3xl">
        {data.map((item) => {
          return (
            <div className="check-square">
              {typeof item.isCustomizedPackageAvailable !== 'boolean' ? (
                <span className="mx-auto text-[1.2rem]">
                  {item.isCustomizedPackageAvailable}
                </span>
              ) : (
                item.isCustomizedPackageAvailable === true && (
                  <FiCheckSquare className="text-[1.3rem] mx-auto cursor-pointer" />
                )
              )}
            </div>
          )
        })}
      </section>
    </main>
  )
}
export default WhatYouGetChart
