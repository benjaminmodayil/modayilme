import React, { useState } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import WorkPreviewCard from '../components/WorkPreviewCard'
import HeaderGraphic from '../images/HeaderGraphic'
import IconPalette from '../images/IconPalette'
import IconWeb from '../images/IconWeb'
import SEO from '../components/seo'

const IndexPage = () => {
  const [activeHover, setActiveHover] = useState(null)
  const move = id => {
    setActiveHover(id)
  }

  const reset = () => {
    setActiveHover(null)
  }
  let workPreviews = [1, 2, 3]

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <header className="mt-16 min-h-partial-screen flex justify-center flex-col">
        <div className="flex items-center justify-center flex-col lg-flex-row flex-wrap lg-justify-between">
          <h1 className="sr-only">Ben Modayil's Homepage</h1>
          <div className="max-w-sm mb-32 lg-mb-0">
            <p>
              <span className="text-3xl font-light">Hi, I'm</span>{' '}
              <span className="block font-special text-red text-7xl">Ben Modayil</span>
            </p>
            <p className="text-3xl font-light leading-normal mt-8">
              I'm a freelance <span>front-end</span> developer living in Philadelphia, PA.
            </p>{' '}
          </div>
          <HeaderGraphic />
        </div>
        <a
          className="text-center link obvious inline-block mx-auto my-64"
          href="#services"
        >
          learn about my services
        </a>
      </header>
      <section>
        <h2 className="sr-only">Services</h2>
        <div className="flex flex-col items-center lg-flex-row lg-justify-between">
          <div className="lg-w-2-3">
            <div className="max-w-sm">
              <p className="text-3xl font-light leading-normal">
                I can work across the lifecycle of a project.
              </p>
              <p className="text-xl font-light leading-normal mt-2">
                This usually includes one if not more of the following:
              </p>
              <ul className="list-reset mt-4">
                <li className="mt-8">
                  <h3 className="flex items-center text-lg font-bold">
                    <IconPalette className="mr-1" /> <span>Design</span>
                  </h3>
                  <p className="mt-2 ml-6 text-black-light">
                    Market Research, Wireframing, UI Design
                  </p>
                </li>
                <li className="mt-8">
                  <h3 className="flex items-center text-lg font-bold">
                    <IconWeb className="mr-1" /> <span>Development</span>
                  </h3>
                  <p className="mt-2 ml-6 text-black-light">
                    Market Research, Wireframing, UI Design
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg-w-1-3">
            <ul className="list-reset">
              {workPreviews.map(i => {
                return (
                  <WorkPreviewCard
                    id={i}
                    activeHover={activeHover}
                    setActiveHover={() => move(i)}
                    setReset={() => reset()}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
