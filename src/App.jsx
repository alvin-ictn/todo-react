import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header";
import Todo from "./Component/Todo/Todo";

class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todoitem !== undefined && this.state.todoitem !== "") {
      this.setState(
        {
          todo: [
            ...this.state.todo,
            {
              text: this.state.todoitem,
              complete: false,
              date: new Date(),
            },
          ],
          todoitem: "",
        },
        () => localStorage.setItem("data", JSON.stringify(this.state.todo))
      );

      e.target.childNodes[0].value = "";
    }
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  removeStorage = () => {
    this.setState({todo : []})
    localStorage.removeItem("data")
    
  }

  state = {
    todo: JSON.parse(localStorage.getItem("data")) || [],
  };

  render() {
    return (
      <div className="App">
        <Header remove={this.removeStorage}/>
        <Todo
          data={this.state.todo}
          submit={this.handleSubmit}
          handle={this.handleInput}
        />
      </div>
    );
  }
}

export default App;
