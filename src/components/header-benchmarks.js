import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryBlueButton from './primary-blue-button'
import PrimaryPinkButton from './primary-pink-button'
import './header-benchmarks.css'

const HeaderBenchmarks = (props) => {
  return (
    <div
      data-role="Header"
      className={`header-benchmarks-header ${props.rootClassName} `}
    >
      <nav className="header-benchmarks-nav">
        <div className="header-benchmarks-container">
          <Link to="/" className="header-benchmarks-navlink Large">
            Team CHPC Dashboard
          </Link>
          <div className="header-benchmarks-menu">
            <Link to="/h-p-l" className="header-benchmarks-navlink01">
              HPL
            </Link>
            <Link to="/h-p-c-c" className="header-benchmarks-navlink02 Label">
              <span className="">HPCC</span>
              <br className=""></br>
            </Link>
            <Link to="/h-p-c-g" className="header-benchmarks-navlink03 Label">
              <span className="">HPCG</span>
              <br className=""></br>
            </Link>
            <Link to="/q-e" className="header-benchmarks-navlink04 Label">
              <span className="">QE</span>
              <br className=""></br>
            </Link>
            <Link to="/p-o-t3d" className="header-benchmarks-navlink05 Label">
              <span className="">POT3D</span>
              <br className=""></br>
            </Link>
            <Link
              to="/f-l-u-t-a-s"
              className="header-benchmarks-navlink06 Label"
            >
              <span className="">FLUTAS</span>
              <br className=""></br>
            </Link>
          </div>
          <div className="header-benchmarks-container1">
            <div className="header-benchmarks-container2">
              <Link to="/live-preview" className="header-benchmarks-navlink07">
                <PrimaryBlueButton
                  button="Live Preview"
                  rootClassName="primary-blue-button-root-class-name1"
                  className="header-benchmarks-component"
                ></PrimaryBlueButton>
              </Link>
            </div>
            <div
              data-role="BurgerMenu"
              className="header-benchmarks-burger-menu"
            >
              <svg viewBox="0 0 1024 1024" className="header-benchmarks-icon">
                <path
                  d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-benchmarks-mobile-menu">
        <div className="header-benchmarks-top">
          <Link to="/" className="header-benchmarks-navlink08 Large">
            Soft UI Design System
          </Link>
          <div
            data-role="CloseMobileMenu"
            className="header-benchmarks-close-menu"
          >
            <svg viewBox="0 0 1024 1024" className="header-benchmarks-icon2">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="header-benchmarks-mid">
          <div className="header-benchmarks-menu1">
            <Link to="/" className="header-benchmarks-navlink09 Large">
              Home
            </Link>
            <Link
              to="/benchmarks"
              className="header-benchmarks-navlink10 Large"
            >
              Profile
            </Link>
            <Link to="/settings" className="header-benchmarks-navlink11 Large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-benchmarks-bot">
          <PrimaryPinkButton button="buy now" className=""></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

HeaderBenchmarks.defaultProps = {
  rootClassName: '',
}

HeaderBenchmarks.propTypes = {
  rootClassName: PropTypes.string,
}

export default HeaderBenchmarks
