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

  componentDidMount() {
    document.querySelector('input').focus()
  }

  switch = (e) => {
    const { state: { status, disabled } } = this
    if (disabled) return
    this.setState({ status: !status })
    this.checkbox.firstChild.classList.toggle('unchecked')
  }

  handleKeyUp = ({ code }) => {
    if (code !== 'Space') return
    this.switch()
  }

  render() {
    const { state: { status, disabled } } = this
    return (
      <div
        className={disabled ? 'switch-wrap disabled' : 'switch-wrap'}
        ref={(checkbox) => { this.checkbox = checkbox }}
      >
        <Switch checked={status} disabled={disabled} handleFormChange={this.switch} />
      </ div>
    )
  }
}

export default SwitchContainer
