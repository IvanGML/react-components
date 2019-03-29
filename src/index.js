import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './layout/home/Home';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
