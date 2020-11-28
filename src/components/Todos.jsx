import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem.jsx";

class Todos extends Component {
  render() {
    // Accessing Props
    // console.log(this.props.todos);

    // Iterating through an array of objects
    return this.props.todos.map((todo) => (
      // <h3>{ todo.title }</h3>
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={this.props.toggleComplete}
        deleteTodo={this.props.deleteTodo}
      />
    ));
  }
}

//Prop types is added to define the type
// of the prop as well as if it is requires
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
export default Todos;
