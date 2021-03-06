import React from 'react'
import { Link } from 'gatsby'

const HomeHero = () => {
  return (
    <div className="homehero">
      <div className="logo-bg"></div>
      <div className="container">
        <div className="tagline">
          <div>Delightfully crafted Data Stories <span className="rotating-text rotating-text-main">leave <span className="em">a Durable Imprint</span></span></div>
        </div>
        <div className="introduction">
          <div className="intro-section"><span className="salutation">Hi!</span>I'm Anne-Marie</div>
          <div className="intro-section">
            <div>I Design &amp; Develop Data Visualizations</div>
            <div>that are <span className="rotating-text rotating-text-secondary-1">Insightful</span> yet <span className="rotating-text rotating-text-secondary-2">Creative</span></div>
          </div>
          <div className="intro-section">
            <Link className="btn" to="/contact">Let's get in touch!</Link>
          </div>
        </div>
      </div>
      <div className="header-bottom-triangles"></div>
    </div>
  )
}

export default HomeHero