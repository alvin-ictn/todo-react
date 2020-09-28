import React, { Component } from 'react'
import styles from './Form.modules.css'
export default class Input extends Component {
  
  render() {
    return (
      <input
      {...this.props}
     />
    )
  }
}
