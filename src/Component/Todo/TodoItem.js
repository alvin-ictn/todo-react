import React, { Component } from 'react'

export default class TodoItem extends Component {
  //index={index+1} data={element} click={this.props.complete(index)} delete={this.props.delete} edit={this.props.edit}
  
  render() {
    const {index,completeTodo,editTodo} = this.props
    const {text,complete,date,edit} = this.props.data
    return (
      <>
         <span>{index}. {text} | {complete.toString()} | {new Date(date).toString()}</span>
            <button onClick={this.props.removeTodo}><span role="img" aria-label="delete">🗑️</span></button>
            <button onClick={editTodo}><span role="img" aria-label="edit">✏️</span></button>
            <button onClick={completeTodo}>{complete ? <span role="img" aria-label="uncomplete">❌</span> : <span role="img" aria-label="complete">✔️</span>}</button>
      </>
    )
  }
}
