import React, { Component } from 'react'
import Btn from './Button'
import Input from './Input'
export default class TodoInput extends Component {
  //style={{padding: "5px 10px", width: "70%", margin: "20px"}}
  render() {
     return (
      <div className="wrap">
          <form onSubmit={this.props.submit}>
            <Input id={"input"} type={"text"} onChange={(e) => this.props.handle(e)} name={this.props.name} className={"TodoInput"}></Input>
            <Btn id={"add"}>Add</Btn>
          </form>
        </div>
    )
  }
}
