import React, { Component } from 'react'
import Btn from "./Button" 
import styles from './Item.module.css'
export default class TodoItem extends Component {
  //index={index+1} data={element} click={this.props.complete(index)} delete={this.props.delete} edit={this.props.edit}
  
  render() {
    const {index,completeTodo,editTodo} = this.props
    const {text,complete,date,edit} = this.props.data
    console.log(new Date(date).toLocaleString("id-ID",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    console.log( new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date(date)))
    // console.log(this.)
    return (
      <div className={styles["todo--item"]}>
        <div className={styles["todo--item--information"]}>
          <p className={styles["todo--item--information--date"]}>{new Date(date).toLocaleTimeString("en-US",{hour12 : false})}</p>
          <label htmlFor="" className={styles["todo--item--information--text"]}>{text}</label>
          <p className={styles["todo--item--information--date"]}>{new Date(date).toLocaleString("id-ID",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className={styles["todo--item--button"]}>
          <Btn onClick={() => this.props.removeTodo(index)}>
              <span role="img" aria-label="delete">🗑️</span>
            </Btn>
            <Btn onClick={() => editTodo(index,text)}>
              <span role="img" aria-label="edit">✏️</span>
            </Btn>
            <Btn onClick={()=>completeTodo(index)}>
              {complete ? <span role="img" aria-label="uncomplete">❌</span> : <span role="img" aria-label="complete">✔️</span>}
            </Btn>
        </div>
      </div>
    )
  }
}
