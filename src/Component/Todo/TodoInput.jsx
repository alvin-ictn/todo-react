import React, { Component } from 'react'
import Btn from './Button'
import Input from './Input'
export default class TodoInput extends Component {
  
  render() {
     return (
      <div className="wrap">
          <form className="input-wrap" onSubmit={this.props.submit}>
            {/* <input
              type="text"
              id="input"
              name = "todoitem"
              onChange={(e) => this.props.handle(e)}
            /> */}
            <Input id={"input"} type={"text"} onChange={(e) => this.props.handle(e)} name={this.props.name}></Input>
            <Btn id={"add"}>Add</Btn>
          </form>
        </div>
    )
  }
}
