import React, { Component } from 'react';
import TodoItem  from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {  

  render() {
    return (
      this.props.todos.map((x) => (
        <TodoItem 
          key={x.id} 
          todo={x} 
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      ))
    );
  }
}

// PropTypes
Todos.protoTypes = {
  todos: PropTypes.array.isRequired,
  markCompelte: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;
