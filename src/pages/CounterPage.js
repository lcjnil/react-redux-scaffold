import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as CounterActions from '../actions/CounterActions.js';


@connect(state => {
  return {
    counter: state.counter,
  };
})
export default class CounterPage extends Component {
  static propTypes = {
    counter: PropTypes.number,
    dispatch: PropTypes.func,
  }

  render() {
    const { counter, dispatch } = this.props;
    return (
      <div>
        <p>Now the count is <span style={{color: 'red'}}>{counter}</span></p>
        <button onClick={() => dispatch(CounterActions.increment())}>+</button> <button onClick={() => dispatch(CounterActions.decrement())}>-</button>
      </div>
    );
  }
}
