import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import OutlineBlueButton from '../components/outline-blue-button'
import FooterGray from '../components/footer-gray'
import './benchmarks.css'

export function getConfig() {
  return {
    host: 'aws.connect.psdb.cloud',
    // username: process.env.REACT_APP_pscale_username,
    // password: process.env.REACT_APP_pscale_password,
    username: '24hl95alg9a2m4owcvga',
    password: 'pscale_pw_g6KUT7XX6Dwvx4G6h9NeJXRXk1DJKcNeaxYcqtern7F',
  }
}

const Benchmarks = (props) => {
  return (
    <div className="benchmarks-container">
      <Helmet>
        <title>Benchmarks</title>
        <meta property="og:title" content="Benchmarks" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="benchmarks-blog-posts">
        <div className="benchmarks-container1">
          <Link to="/h-p-l" className="benchmarks-navlink">
            <OutlineBlueButton
              rootClassName="outline-blue-button-root-class-name"
              button="HPL"
              className="benchmarks-component1"
            ></OutlineBlueButton>
          </Link>
          <span className="benchmarks-text">No. of results: N/A</span>
        </div>
        <div className="benchmarks-container2">
          <Link to="/h-p-c-c" className="benchmarks-navlink1">
            <OutlineBlueButton
              rootClassName="outline-blue-button-root-class-name5"
              button="HPCC"
              className="benchmarks-component2"
            ></OutlineBlueButton>
          </Link>
          <span className="benchmarks-text1">No. of results: N/A</span>
        </div>
        <div className="benchmarks-container3">
          <Link to="/h-p-c-g" className="benchmarks-navlink2">
            <OutlineBlueButton
              rootClassName="outline-blue-button-root-class-name4"
              button="HPCG"
              className="benchmarks-component3"
            ></OutlineBlueButton>
          </Link>
          <span className="benchmarks-text2">No. of results: N/A</span>
        </div>
        <div className="benchmarks-container4">
          <Link to="/q-e" className="benchmarks-navlink3">
            <OutlineBlueButton
              rootClassName="outline-blue-button-root-class-name3"
              button="QE"
              className="benchmarks-component4"
            ></OutlineBlueButton>
          </Link>
          <span className="benchmarks-text3">No. of results: N/A</span>
        </div>
        <div className="benchmarks-container5">
          <Link to="/p-o-t3d" className="benchmarks-navlink4">
            <OutlineBlueButton
              rootClassName="outline-blue-button-root-class-name2"
              button="POT3D"
              className="benchmarks-component5"
            ></OutlineBlueButton>
          </Link>
          <span className="benchmarks-text4">No. of results: N/A</span>
        </div>
        <div className="benchmarks-container6">
          <OutlineBlueButton
            rootClassName="outline-blue-button-root-class-name1"
            button="FLUTAS"
          ></OutlineBlueButton>
          <span className="benchmarks-text5">No. of results: N/A</span>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default Benchmarks
