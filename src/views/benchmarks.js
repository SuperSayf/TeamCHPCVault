import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'
import './benchmarks.css'

const Benchmarks = (props) => {
  return (
    <div className="benchmarks-container">
      <Helmet>
        <title>Benchmarks - Soft UI Pro</title>
        <meta property="og:title" content="Benchmarks - Soft UI Pro" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="benchmarks-blog-posts">
        <h1 className="benchmarks-text HeadingTwo">
          <span>All results</span>
          <br></br>
        </h1>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default Benchmarks
