import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';

const types = ['All', 'Active', 'Completed'];

export default class TodoFooter extends Component {

  static propTypes = {
    todos: PropTypes.instanceOf(List).isRequired,
    filter: PropTypes.string.isRequired,
  };

  render() {
    const { todos, filter, setFilter } = this.props;
    const count = todos.count((todo) => !todo.get('completed'));

    return (
      <footer className="footer">
        <span className="todo-count"><strong>{count}</strong> item left</span>
        <ul className="filters">
          {
            types.map((type, index) =>
              <li key={index}><a className={filter === type && 'selected'} onClick={() => setFilter(type)}>{type}</a></li>
            )
          }
        </ul>
        <button className="clear-completed" onClick={() => this.props.clearTodo()}>Clear completed</button>
      </footer>
    );
  }
}
