import React, { Component } from 'react';
import TodoApp from 'components/TodoApp';

require('todomvc-app-css/index.css');
export default class TodosPage extends Component {

  render() {
    return (
      <div>
        <TodoApp />
      </div>
    );
  }
}
