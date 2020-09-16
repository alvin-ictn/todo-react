import React, { Component } from 'react'
import logo from '../../logo.svg';

export default class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <code>React</code>.
        </p>
        <p
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={this.props.remove}
        >
          Delete List
        </p>
      </header>
    )
  }
}
