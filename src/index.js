import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import configureStore, { history } from './store/configureStore';
// require('./favicon.ico');
import './index.scss';
import HomePage from './containers/HomePage'; // eslint-disable-line import/no-named-as-default
import NotfoundPage from './containers/NotfoundPage'; // eslint-disable-line import/no-named-as-default

const store = configureStore();
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="index-container">
        <div className="switch-container">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route component={NotfoundPage} />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
