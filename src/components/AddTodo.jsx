import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  // Component State
  state = {
    title: "",
  };

  onSubmit = (e) =>{
    e.preventDefault();

    //title is emitted to App
    this.props.addTodo(this.state.title);

    // Empty title
    this.setState({
      title: ''
    })
  }

  // Dynamically updates the state
  // as user types into the fields
  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo.."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
