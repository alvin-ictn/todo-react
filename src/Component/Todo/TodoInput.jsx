import React, { Component } from 'react'

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
            <button id="add">Add</button>
          </form>
        </div>
    )
  }
}
