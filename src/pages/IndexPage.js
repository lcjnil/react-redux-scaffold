import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium, { Style } from 'radium';

import baseCss from 'styles/base.css.js';

const styles = {
  p: {
    color: baseCss.color.primary,
    ':hover': {
      color: 'red'
    }
  }
};

@Radium
export default class IndexPage extends Component {
  render() {
    return (
      <div className="one-div">
        <Style
          scopeSelector=".one-div"
          rules={{
            a: {
              color: 'red'
            }
          }}/>
        <p style={styles.p}>this is the index page</p>
        <Link to="/counter">GO TO COUNTER</Link>
      </div>
    );
  }
}


