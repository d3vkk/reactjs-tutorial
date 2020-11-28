import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Header from "./components/layouts/Header";
import Todos from "./components/Todos.jsx";
import AddTodo from "./components/AddTodo.jsx";
import About from "./components/views/About";

class App extends Component {
  // Global state
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: "Todo 1",
      //   completed: false,
      // },
      // {
      //   id: 2,
      //   title: "Todo 2",
      //   completed: true,
      // },
      // {
      //   id: 3,
      //   title: "Todo 3",
      //   completed: false,
      // },
    ],
  };

  toggleComplete = (id) => {
    // Displaying id from TodoItem props emitting
    // console.log(id);

    // Changing the todo data
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo = (id) => {
    // this.setState({
    //   // Filter out the todo that matches the id
    //   todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    // });
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };

  addTodo = (title) => {
    // const newTodo = {
    //   // Generate id using the length of todos
    //   id: this.state.todos.length + 1,
    //   title: title,
    //   completed: false,
    // };
    // this.setState({ todos: [...this.state.todos, newTodo] });
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        //When key is the same as value
        //one word will be enough
        title,
        completed: false,
      })
      .then((res) =>
        this.setState({
          todos: [...this.state.todos, res.data],
        })
      );
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

  render() {
    // console.log(this.state.todos);
    return (
      // Router must wrap everything
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* When more than one component with props needs to be added */}
            {/* Use route render */}
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />

                  {/* Passing down Props to a component*/}
                  {/* The props toggleComplete goes two levels down to TodoItem*/}
                  <Todos
                    todos={this.state.todos}
                    toggleComplete={this.toggleComplete}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
