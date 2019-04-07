import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navigation from './layout/navigation/Navigation';
import App from './App';
import ButtonSandbox from './components/button/ButtonSandbox';
import ButtonGroupSandbox from './components/buttonGroup/ButtonGroupSandbox';
import IconSandbox from './components/icon/IconSandbox';
import ImageSandbox from './components/image/ImageSandbox';
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
                <Route exact path="/button" component={ButtonSandbox} />
                <Route exact path="/group-button" component={ButtonGroupSandbox} />
                <Route exact path="/icon" component={IconSandbox} />
                <Route exact path="/image" component={ImageSandbox} />
                {/* <Redirect to="/" />   */} 
                {/* redirect make infinty loop. should be fixed */}
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
