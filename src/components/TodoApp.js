import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoHeader from './TodoHeader.js';
import TodoList from './TodoList.js';
import TodoFooter from './TodoFooter.js';

import * as todosActionCreators from '../actions/TodosAction.js';

@connect((state) => {
  return {
    todos: state.todos,
    filter: state.filter
  };
}, todosActionCreators)
export default class TodoApp extends Component {
  render() {
    const { todos, filter, addTodo, deleteTodo, toggleChecked, setFilter, clearTodo } = this.props;
    return (
      <section className="todoapp">
        <TodoHeader addTodo={addTodo}/>
        <TodoList todos={todos} filter={filter} toggleChecked={toggleChecked} deleteTodo={deleteTodo}/>
        <TodoFooter todos={todos} filter={filter} setFilter={setFilter} clearTodo={clearTodo}/>
      </section>
    );
  }
}
