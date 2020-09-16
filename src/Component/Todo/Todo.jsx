import React, { Component } from "react";
import Input from './TodoInput';
export default class Todo extends Component {
   render() {
    return (
      <div>
        <Input submit={this.props.submit} handle={this.props.handle}/>
        {this.props.data.map((element, index) => (
          <li id={index} key={index}>
            {element.text}
          </li>
        ))}
      </div>
    );
  }
}
