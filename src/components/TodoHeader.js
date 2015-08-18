import React, { Component, PropTypes } from 'react';

export default class TodoHeader extends Component {

  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <input type="text" className="new-todo"
               placeholder="What needs to be done?" autoFocus
               onKeyDown={::this.handleEnter}/>
      </header>
    );
  }

  handleEnter(e) {
    if (e.which === 13) {
      this.props.addTodo(e.target.value);
      e.target.value = '';
    }
  }
}

TodoHeader.contextTypes = {
  dispatch: PropTypes.func
};
