import React from 'react'

import PropTypes from 'prop-types'

import './secondary-button.css'

const SecondaryButton = (props) => {
  return (
    <div className={`secondary-button-container ${props.rootClassName} `}>
      <button className="secondary-button-button button ButtonSmall">
        {props.button}
      </button>
    </div>
  )
}

SecondaryButton.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

SecondaryButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default SecondaryButton
