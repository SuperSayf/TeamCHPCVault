import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'
import './settings.css'

const Settings = (props) => {
  return (
    <div className="settings-container">
      <Helmet>
        <title>Settings - Soft UI Pro</title>
        <meta property="og:title" content="Settings - Soft UI Pro" />
      </Helmet>
      <Header></Header>
      <div className="settings-container1">
        <div className="settings-main">
          <div className="settings-container2">
            <h1 className="settings-text">This page</h1>
            <h1 className="settings-text1">is coming soon</h1>
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default Settings
