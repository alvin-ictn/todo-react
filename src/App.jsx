import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header";
import Todo from "./Component/Todo/Todo";

class App extends Component {
  state = {
    todo: JSON.parse(localStorage.getItem("data")) || [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.textBaru !== undefined && this.state.textBaru !== "") {
      if(this.state.edit) {
        this.setState({    
        })
      }else {
          this.setState(
            {
              todo: [
                ...this.state.todo,
                {
                  text: this.state.textBaru,
                  complete: false,
                  edit : false,
                  date: new Date(),
                },
              ],
              textBaru: "",
            },
            () => localStorage.setItem("data", JSON.stringify(this.state.todo))
          );
            
          e.target.childNodes[0].value = "";
        }
      }
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  removeStorage = () => {
    this.setState({ todo: [] });
    localStorage.removeItem("data");
  };

  remove = (index) => {
    console.log(index)
    // let data = this.state.todo;
    // data.splice(index.target.parentNode.id, 1);
    // this.setState(
    //   {
    //     todo: data,
    //   },
    //   () => localStorage.setItem("data", JSON.stringify(this.state.todo))
    // );
  }

  done(e){
    console.log("THIS IS AFTER")
    console.log(e)
    // if (event.which == 13) { // event which 13 adalah tombol enter
    //     this.data[index].text = event.target.value; // ini untuk mengisi key text pada  objek todo di index yang dituju
    //     this.storage('todo', this.data, true); // menyimpan data pada local storage dengan fungsi storage 
    //     this.show(); // menampilkan ulang data
    // }
  }

  editTodo = (index) => {
    let data = this.state.todo;
    data[index.target.parentNode.id].edit = data[index.target.parentNode.id].complete ? false : true;
    this.setState(
      {
        todo: data,
      },
      () => {localStorage.setItem("data", JSON.stringify(this.state.todo))
    console.log(this.state.todo)}
    );
  }

  completeTask = (index) => {
    let data = this.state.todo;
    // data[index.target.parentNode.id].complete = data[index.target.parentNode.id].complete ? false : true;
    // console.log(data)
    // this.setState(
    //   {
    //     todo: data,
    //   },
    //   () => localStorage.setItem("data", JSON.stringify(this.state.todo))
    // );
  }

  render() {
    return (
      <div className="App">
        <Header remove={this.removeStorage} />
        <Todo
          condition={this.state.edit}
          data={this.state.todo}
          submit={this.handleSubmit}
          handle={this.handleInput}
          remove={this.remove}
          complete={this.completeTask}
          done={this.done}
          editTodo = {this.editTodo}
        />
      </div>
    );
  }
}

export default App;
