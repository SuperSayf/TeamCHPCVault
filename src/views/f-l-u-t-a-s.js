import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderBenchmarks from '../components/header-benchmarks'
import FooterGray from '../components/footer-gray'
import './f-l-u-t-a-s.css'

const FLUTAS = (props) => {
  return (
    <div className="f-l-u-t-a-s-container">
      <Helmet>
        <title>FLUTAS - Soft UI Pro</title>
        <meta property="og:title" content="FLUTAS - Soft UI Pro" />
      </Helmet>
      <HeaderBenchmarks rootClassName="header-benchmarks-root-class-name6"></HeaderBenchmarks>
      <div className="f-l-u-t-a-s-blog-posts">
        <h1 className="f-l-u-t-a-s-text">FLUTAS COMING SOON</h1>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default FLUTAS
