import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderBenchmarks from '../components/header-benchmarks'
import FooterGray from '../components/footer-gray'
import './q-e.css'

const QE = (props) => {
  return (
    <div className="q-e-container">
      <Helmet>
        <title>QE</title>
        <meta property="og:title" content="QE" />
      </Helmet>
      <HeaderBenchmarks rootClassName="header-benchmarks-root-class-name4"></HeaderBenchmarks>
      <div className="q-e-blog-posts">
        <h1 className="q-e-text">QE COMING SOON</h1>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default QE
