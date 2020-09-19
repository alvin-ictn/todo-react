import React, { Component } from "react";
import Input from "./TodoInput";
import TodoItem from "./TodoItem";
import Btn from "./Button" 
export default class Todo extends Component {
  // state = {
  //   data : ""
  // }

  edit = (e) => {
    console.log(e.target.parentNode.childNodes[2].data);
    // let props = this.props.done(e)
    // let id = (e.target.parentNode.id)
    // console.log( e.target.parentNode)
    // e.target.parentNode.innerHTML = <Input/>
  };

  render() {
    console.log(this.props)
    return (
      <div>
        <Input
          submit={this.props.submit}
          handle={this.props.handle}
          condition={this.props.condition}
        />
        {this.props.data.map((element, index) => (
          <li id={index} key={index}>
            {element.edit ? (
              <Input />
            ) : (
              <TodoItem
                index={index}
                data={element}
                completeTodo={this.props.complete}
                removeTodo={this.props.remove}
                editTodo={this.props.editTodo}
              />
            )}
            {/* {index + 1}. {element.text} | {element.complete.toString()} | {new Date(element.date).toString()}
            <button onClick={this.props.remove}><span role="img" aria-label="delete">🗑️</span></button>
            <button onClick={this.props.editTodo}><span role="img" aria-label="edit">✏️</span></button>
            <button onClick={() => this.props.complete(index)}>{element.complete ? <span role="img" aria-label="uncomplete">❌</span> : <span role="img" aria-label="complete">✔️</span>}</button> */}
          </li>
        ))}
      </div>
    );
  }
}
