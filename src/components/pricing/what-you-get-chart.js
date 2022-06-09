import React from 'react'
import './what-you-get-chart.css'
import { data } from './what-you-get-chart-data'
import { FiCheckSquare } from 'react-icons/fi'

function WhatYouGetChart() {
  return (
    <main className="what-you-get-chart-container">
      <div className="what-you-get-sidebar sm:rounded-3xl  rounded-2xl">
        {data.map((item, index) => (
          <div className="sidebar-text-container" key={index}>
            <p className="px-2 sm:px-4 text-center">{item.providing}</p>
          </div>
        ))}
      </div>
      <h3 className="text-[1rem] sm:text-[1.2rem] basic-package-heading package-heading text-center sm:rounded-tl-3xl rounded-tl-2xl bg-white pt-10">
        Basic Package
      </h3>
      <section className="basic-package-availability sm:rounded-bl-3xl rounded-bl-2xl">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="check-square text-[1rem] sm:text-[1.2rem]"
            >
              {typeof item.isBasicPackageAvailable !== 'boolean' ? (
                <span className="mx-auto">{item.isBasicPackageAvailable}</span>
              ) : item.isBasicPackageAvailable === true ? (
                <FiCheckSquare className="text-[1.1rem] sm:text-[1.3rem] mx-auto cursor-pointer" />
              ) : (
                <span className="mx-auto">_</span>
              )}
            </div>
          )
        })}
      </section>
      <h3 className="text-[1rem] sm:text-[1.2rem] customized-package-heading package-heading text-center sm:rounded-tr-3xl rounded-tr-2xl bg-white pt-10">
        Customized Package
      </h3>
      <section className="customized-package-availability sm:rounded-br-3xl rounded-br-2xl">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="check-square text-[1rem] sm:text-[1.2rem]"
            >
              {typeof item.isCustomizedPackageAvailable !== 'boolean' ? (
                <span className="mx-auto">
                  {item.isCustomizedPackageAvailable}
                </span>
              ) : item.isCustomizedPackageAvailable === true ? (
                <FiCheckSquare className="text-[1.1rem] sm:text-[1.3rem] mx-auto cursor-pointer" />
              ) : (
                <span className="mx-auto">_</span>
              )}
            </div>
          )
        })}
      </section>
    </main>
  )
}
export default WhatYouGetChart
