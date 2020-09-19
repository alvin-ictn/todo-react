import React, { Component } from 'react'
import Btn from './Button'
export default class TodoInput extends Component {
  render() {
     return (
      <div className="wrap">
          <form className="input-wrap" onSubmit={this.props.submit}>
            <input
              type="text"
              id="input"
              name = "todoitem"
              onChange={(e) => this.props.handle(e)}
            />
            <Btn id={"add"}>Add</Btn>
          </form>
        </div>
    )
  }
}
