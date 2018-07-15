import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import '@babel/polyfill';

import addLogger from '../Store';

class AppService {
  constructor({ App, stores, node }) {
    addLogger(stores);
    this.stores = stores;
    this.App = App;
    this.node = node;
  }

  render() {
    const { App, stores, node } = this;

    render((
      <Provider {...stores}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    ), node);
  }
}

export default AppService;
