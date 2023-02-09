import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryBlueButton from './primary-blue-button'
import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className={`header-header ${props.rootClassName} `}>
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="header-navlink Large">
            Team CHPC Dashboard
          </Link>
          <div className="header-menu">
            <Link to="/" className="header-navlink1">
              Home
            </Link>
            <Link to="/benchmarks" className="header-navlink2 Label">
              <span className="">Benchmarks</span>
              <br className=""></br>
            </Link>
            <Link to="/settings" className="header-navlink3 Label">
              <span className="">Settings</span>
              <br className=""></br>
            </Link>
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <Link to="/live-preview" className="header-navlink4">
                <PrimaryBlueButton
                  rootClassName="primary-blue-button-root-class-name"
                  button="Live Preview"
                  className="header-component"
                ></PrimaryBlueButton>
              </Link>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path
                  d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
                  className=""
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink5 Large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path
                d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink6 Large">
              Home
            </Link>
            <Link to="/benchmarks" className="header-navlink7 Large">
              Profile
            </Link>
            <Link to="/settings" className="header-navlink8 Large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now" className=""></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  rootClassName: '',
}

Header.propTypes = {
  rootClassName: PropTypes.string,
}

export default Header
