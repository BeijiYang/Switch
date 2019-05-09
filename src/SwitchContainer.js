import React, { Component } from 'react'
import Switch from './Switch'

class SwitchContainer extends Component {
  constructor() {
    super()
    this.state = {
      status: true,
      disabled: false,
    }
    this.checkBox = React.createRef()
  }

  componentDidMount() {
    this.checkBox.current.firstChild.focus()
  }

  switch = (e) => {
    const { state: { status, disabled } } = this
    if (disabled) return
    this.setState({ status: !status })
    this.checkBox.current.classList.toggle('unchecked')
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
      >
        <Switch
          checked={status}
          disabled={disabled}
          handleFormChange={this.switch}
          ref={this.checkBox}
        />
      </ div>
    )
  }
}

export default SwitchContainer
