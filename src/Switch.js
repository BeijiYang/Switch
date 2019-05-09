import React from 'react'
import PropTypes from 'prop-types'

const Switch = React.forwardRef(
  ({ disabled,
    handleClick,
    handleKeyUp,
    checked,
    handleFormChange },
    ref) => (
      <div
        className='switch'
        ref={ref}
      >
        <input
          className={disabled ? 'checkbox disabled' : 'checkbox'}
          type="checkbox"
          onChange={handleFormChange}
          checked={checked}
          disabled={disabled}
        />
      </div>
    ))

Switch.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  status: PropTypes.bool,
}

export default Switch

