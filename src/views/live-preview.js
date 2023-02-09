import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'
import './live-preview.css'

const LivePreview = (props) => {
  return (
    <div className="live-preview-container">
      <Helmet>
        <title>LivePreview</title>
        <meta property="og:title" content="LivePreview" />
      </Helmet>
      <Header></Header>
      <div className="live-preview-container1">
        <div className="live-preview-main">
          <div className="live-preview-container2">
            <h1 className="live-preview-text">This page</h1>
            <h1 className="live-preview-text1">is coming soon</h1>
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default LivePreview
