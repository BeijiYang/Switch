import React from 'react'
import PropTypes from 'prop-types'

const Switch = ({ disabled }) => (
  <div className='switch'>
    <input
      className={disabled ? 'checkbox disabled' : 'checkbox'}
      type="checkbox"
      disabled={disabled} />
  </div>
)

Switch.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Switch

