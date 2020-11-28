import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    //Longhand
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: "line-through",
    //   };
    // } else {
    //   return {
    //     textDecoration: "none",
    //   };
    // }

    //Shorthand
    return {
      backgroundColor: itemStyle.backgroundColor,
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  // toggleComplete function is executed onChange
  // toggleComplete = (e) => {
  //   console.log(this.props);
  // };

  render() {
    //Destructuring props
    const { id, title } = this.props.todo;
    return (
      // Inline styling
      // <div style={{ backgroundColor: '#f4f4f4'}}>

      //CSS in JS
      // <div style={itemStyle}>

      // Conditionally style todo items
      <div style={this.getStyle()}>
        <p>
          {/* toggleComplete function is executed onChange */}
          {/* <input type="checkbox" onChange={this.toggleComplete} />{" "} */}
          {/* {" "} - adds space */}
          {/* id is emitted two levels up to App */}
          <input
            type="checkbox"
            onChange={this.props.toggleComplete.bind(this, id)}
          />{" "}
          {/* Before destructuring props */}
          {/* {this.props.todo.title} */}
          {/* After destructuring props */}
          {title}
          <button
            style={btnStyle}
            onClick={this.props.deleteTodo.bind(this, id)}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const itemStyle = {
  backgroundColor: "#f4f4f4",
};

const btnStyle = {
  background: "firebrick",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
