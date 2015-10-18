import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from 'styles/main.scss';

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <blockquote>Only a todo example here </blockquote>
        <Link to="/todos">GO TO TodoMVC</Link>
        <div className={styles.parent}>
          red!
          <p className={styles.child}>blue</p>
        </div>
      </div>
    );
  }
}


