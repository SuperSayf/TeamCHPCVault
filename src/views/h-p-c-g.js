import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderBenchmarks from '../components/header-benchmarks'
import FooterGray from '../components/footer-gray'
import './h-p-c-g.css'

const HPCG = (props) => {
  return (
    <div className="h-p-c-g-container">
      <Helmet>
        <title>HPCG</title>
        <meta property="og:title" content="HPCG" />
      </Helmet>
      <HeaderBenchmarks rootClassName="header-benchmarks-root-class-name3"></HeaderBenchmarks>
      <div className="h-p-c-g-blog-posts">
        <h1 className="h-p-c-g-text">HPCG COMING SOON</h1>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default HPCG
