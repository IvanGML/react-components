import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import Button from './components/button/ButtonSandbox';
import ButtonGroup from './components/buttonGroup/ButtonGroupSandbox';
import * as serviceWorker from './serviceWorker';

import Home from './layout/home/Home';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/button" component={Button} />
        <Route exact path="/group-button" component={ButtonGroup} />
        <Redirect to="/" />
      </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
