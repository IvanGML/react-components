import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navigation from './layout/navigation/Navigation';
import App from './App';
import Button from './components/button/ButtonSandbox';
import ButtonGroup from './components/buttonGroup/ButtonGroupSandbox';
import * as serviceWorker from './serviceWorker';

import Home from './layout/home/Home';

const AppWithTransition = props => {
  return (
    <Fragment>
      <Navigation key="navigation" />,
      <TransitionGroup>
        <CSSTransition
          key={props.location.key}
          classNames="swipe"
          timeout={500}
        >
          <div className="swipe-container">
            <App>
              <Switch location={props.location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/button" component={Button} />
                <Route exact path="/group-button" component={ButtonGroup} />
                <Redirect to="/" />
              </Switch>
            </App>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
}

ReactDOM.render((
  <BrowserRouter>
    <Route component={AppWithTransition} />
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
