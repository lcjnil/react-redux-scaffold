'use strict';

describe('ReduxScaffoldApp', () => {
  let React = require('react/addons');
  let ReduxScaffoldApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReduxScaffoldApp = require('components/ReduxScaffoldApp.js');
    component = React.createElement(ReduxScaffoldApp);
  });

  it('should create a new instance of ReduxScaffoldApp', () => {
    expect(component).toBeDefined();
  });
});
