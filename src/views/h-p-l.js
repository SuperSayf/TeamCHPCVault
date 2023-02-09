import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderBenchmarks from '../components/header-benchmarks'
import FooterGray from '../components/footer-gray'
import './h-p-l.css'

const HPL = (props) => {
  return (
    <div className="h-p-l-container">
      <Helmet>
        <title>HPL - Soft UI Pro</title>
        <meta property="og:title" content="HPL - Soft UI Pro" />
      </Helmet>
      <HeaderBenchmarks rootClassName="header-benchmarks-root-class-name1"></HeaderBenchmarks>
      <div className="h-p-l-blog-posts">
        <h1 className="h-p-l-text">HPL COMING SOON</h1>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default HPL
