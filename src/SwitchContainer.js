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

  switchCheckBox = () => {
    const { state: { status, disabled }, checkBox } = this
    if (disabled) return
    this.setState({ status: !status })
    checkBox.current.classList.toggle('unchecked')
  }

  handleKeyUp = ({ code }) => {
    if (code !== 'Space') return
    this.switchCheckBox()
  }

  render() {
    const { state: { status, disabled }, checkBox, switchCheckBox } = this
    return (
      <div
        className={disabled ? 'switch-wrap disabled' : 'switch-wrap'}
      >
        <Switch
          checked={status}
          disabled={disabled}
          handleFormChange={switchCheckBox}
          ref={checkBox}
        />
      </ div>
    )
  }
}

export default SwitchContainer
