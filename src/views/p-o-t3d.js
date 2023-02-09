import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderBenchmarks from '../components/header-benchmarks'
import FooterGray from '../components/footer-gray'
import './p-o-t3d.css'

const POT3D = (props) => {
  return (
    <div className="p-o-t3d-container">
      <Helmet>
        <title>POT3D</title>
        <meta property="og:title" content="POT3D" />
      </Helmet>
      <HeaderBenchmarks rootClassName="header-benchmarks-root-class-name5"></HeaderBenchmarks>
      <div className="p-o-t3d-blog-posts">
        <h1 className="p-o-t3d-text">POT3D COMING SOON</h1>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default POT3D
