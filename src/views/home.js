import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Team CHPC</title>
        <meta property="og:title" content="Team CHPC" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-hero">
        <div className="home-container1">
          <div className="home-card">
            <h1 className="home-text HeadingOne">Welcome to</h1>
            <h1 className="home-text1 HeadingOne">Team CHPC&apos;s vault</h1>
            <span className="home-text2">
              This website is used to analyze our benchmark results
            </span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI3fHxjb2RlfGVufDB8fHx8MTY3NTk1MTIwOA&amp;ixlib=rb-4.0.3&amp;h=1500"
        className="home-image"
      />
      <section className="home-testimonials">
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image1"
        />
      </section>
      <FooterGray></FooterGray>
    </div>
  )
}

export default Home
