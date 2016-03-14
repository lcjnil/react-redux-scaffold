import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoHeader from './TodoHeader.js';
import TodoList from './TodoList.js';
import TodoFooter from './TodoFooter.js';

import * as todosActionCreators from '../actions/TodosAction.js';

class TodoApp extends Component {
  render() {
    const { todos, filter, addTodo, deleteTodo, toggleChecked, setFilter, clearTodo } = this.props;
    return (
      <section className="todoapp">
        <TodoHeader addTodo={ addTodo } />
        <TodoList todos={todos} filter={filter} toggleChecked={toggleChecked} deleteTodo={deleteTodo} />
        <TodoFooter todos={todos} filter={filter} setFilter={setFilter} clearTodo={clearTodo} />
      </section>
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return { todos: state.todos, filter: state.filter };
};
export default connect(mapStateToProps, todosActionCreators)(TodoApp);
