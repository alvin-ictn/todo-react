import React, { Component } from 'react'

export default class Button extends Component {
  render() {

    //<button onClick={removeTodo}><span role="img" aria-label="delete">🗑️</span></button>
    return (
      <button {...this.props} >
        {this.props.children || "Button"}
      </button>
    )
  }
}
