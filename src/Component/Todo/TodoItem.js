import React, { Component } from 'react'
import Btn from "./Button" 
export default class TodoItem extends Component {
  //index={index+1} data={element} click={this.props.complete(index)} delete={this.props.delete} edit={this.props.edit}
  
  render() {
    const {index,completeTodo,editTodo} = this.props
    const {text,complete,date,edit} = this.props.data
    // console.log(this.)
    return (
      <>
         <span>{index+1}. {text} | {complete.toString()} | {new Date(date).toString()}</span>
            <Btn onClick={() => this.props.removeTodo(index)}>
              <span role="img" aria-label="delete">🗑️</span>
            </Btn>
            <Btn onClick={() => editTodo(index,text)}>
            <span role="img" aria-label="edit">✏️</span>
            </Btn>
            <Btn onClick={()=>completeTodo(index)}>
              {complete ? <span role="img" aria-label="uncomplete">❌</span> : <span role="img" aria-label="complete">✔️</span>}
            </Btn>
      </>
    )
  }
}
