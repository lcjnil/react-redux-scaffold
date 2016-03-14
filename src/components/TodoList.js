import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';


export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.instanceOf(Immutable.List).isRequired,
    filter: PropTypes.string.isRequired
  };

  handleCheck(index) {
    this.props.toggleChecked(index);
  }

  handleDestroy(index) {
    this.props.deleteTodo(index);
  }

  render() {
    const { todos, filter } = this.props;
    let filterFunc = () => true;
    if (filter === 'Active') {
      filterFunc = (todo) => !todo.get('completed');
    } else if (filter === 'Completed') {
      filterFunc = (todo) => todo.get('completed');
    }
    let list;
    if (!todos) {
      list = null;
    } else {
      list = todos.filter(filterFunc).map((item, index) =>
        <li key={index} className={item.get('completed') && 'completed'} >
          <div className="view">
            <input type="checkbox" className="toggle" checked={item.get('completed')} onChange={this.handleCheck.bind(this, index)} />
            <label>{item.get('text')}</label>
            <button className="destroy" onClick={this.handleDestroy.bind(this, index)}></button>
          </div>
        </li>
      );
    }
    return (
      <section className="main">
        <input type="checkbox" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {list}
        </ul>
      </section>
    );
  }
}

