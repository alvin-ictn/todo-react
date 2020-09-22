import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header";
import Todo from "./Component/Todo/Todo";

class App extends Component {
  state = {
    todo: [],
  };
  
  componentDidMount(){
    this.setState({
      todo : JSON.parse(localStorage.getItem("data")) || []
    })
  }
  componentDidUpdate(){
    localStorage.setItem("data", JSON.stringify(this.state.todo))
  }

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
                  isEdited : false,
                },
              ],
              textBaru: "",
            },
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
    let data = this.state.todo;
    data.splice(index, 1);
    this.setState(
      {
        todo: data,
      },
    );
  }

  done = (e) => {
    let index = e.target.getAttribute("index")
    if(e.which === 13){
      console.log(e.target.value)
      let data = this.state.todo;
      data[index] = {
        ...data[index],
        edit : false,
        text : e.target.value
      }
      this.setState({
        todo : data,
        textBaru : ""
      })
    }
    // if (event.which == 13) { // event which 13 adalah tombol enter
    //     this.data[index].text = event.target.value; // ini untuk mengisi key text pada  objek todo di index yang dituju
    //     this.storage('todo', this.data, true); // menyimpan data pada local storage dengan fungsi storage 
    //     this.show(); // menampilkan ulang data
    // }
  }

  editTodo = (text,index) => {
    let data = this.state.todo;
    data[index].edit = !data[index].edit
    data[index].isEdited = !data[index].isEdited;
    this.setState(
      {
        todo: data,
      },

    );
    //() => {localStorage.setItem("data", JSON.stringify(this.state.todo))
    //console.log(this.state.todo)}
  }

  completeTask = (index) => {
    console.log(index)
    let data = this.state.todo;
    data[index].complete = !data[index].complete
    console.log(data)
    this.setState(
      {
        todo: data,
      },
    );
  }


  render() {
    return (
      <div className="App" onClick={this.resetState}>
        <Header remove={this.removeStorage} />
        <Todo
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
