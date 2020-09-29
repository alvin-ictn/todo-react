import React, { Component } from "react";
import TodoInput from "./TodoInput";
import Input from "./Input";
import TodoItem from "./TodoItem";
import styles from './Todo.module.css'
export default class Todo extends Component {
  state = {
    value : []
  };
  
  componentDidMount(){
    this.setState({value : Array.from(Array(this.props.data.length).keys())})
  }

  edit(text, index) {
    let data = this.state.value
    data[index] = text
    console.log(data)
    this.setState({
      value : data
    });
    console.log(this.state.value);
    this.props.editTodo(null, index);
  }

  render() {
    return (
      <div className={styles.Todo}>
        <TodoInput
          submit={this.props.submit}
          handle={this.props.handle}
          condition={this.props.condition}
          name="textBaru"
          className={styles.TodoInput}
        />
        {this.props.data.map((element, index) => (
          <li id={index} key={index} className={styles.TodoList}>
            {element.edit ? (
              <Input
                index={index}
                name="textBaru"
                onChange={(e) =>{
                  console.log(this.state.value)
                  let data = this.state.value
                  data[index] = e.target.value
                  this.setState({
                    value: data,
                  })
                }
                }
                onKeyPress={this.props.done}
                value={this.state.value[index]}
              />
            ) : (
              <TodoItem
                index={index}
                data={element}
                completeTodo={this.props.complete}
                removeTodo={this.props.remove}
                editTodo={() => this.edit(element.text, index)}
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
