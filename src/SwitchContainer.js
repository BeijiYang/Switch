import React, { Component } from 'react'
import Switch from './Switch'

class SwitchContainer extends Component {
  constructor() {
    super()
    this.state = {
      status: true,
      disabled: false,
    }
  }

  switch = () => {
    const { state: { status, disabled } } = this
    if (disabled) return
    this.setState({ status: !status })
    this.checkbox.firstChild.classList.toggle('unchecked')
  }

  render() {
    const { state: { status, disabled } } = this

    return (
      <div className={disabled ? 'switch-wrap disabled' : 'switch-wrap'} onClick={this.switch} ref={(checkbox) => { this.checkbox = checkbox }}>
        <Switch checked={status} disabled={disabled} />
      </div>
    )
  }
}

export default SwitchContainer
