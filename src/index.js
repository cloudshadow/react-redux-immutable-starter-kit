import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import history from './utils/history';
import { Route, Switch } from 'react-router';
import configureStore from './store/configureStore';
// require('./favicon.ico');
import './index.scss';
import { ConnectedRouter } from 'react-router-redux';
import HomePage from './containers/HomePage'; // eslint-disable-line import/no-named-as-default
import NotfoundPage from './containers/NotfoundPage'; // eslint-disable-line import/no-named-as-default

const store = configureStore();

render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div className="index-container">
        <div className="switch-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotfoundPage} />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('app')
);
