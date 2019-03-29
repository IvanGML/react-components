import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Button from '../../components/button/Button';
import './navigation.css';

class Navigation extends Component {
  state = {
    showMenu: false
  }
  toggleMenu = () => this.setState((prevState) => ({showMenu: !prevState.showMenu}));
  render() {
    const { showMenu } = this.state;
    return (
      <div className="navigation">
        <Button className="transparent-btn" onClick={this.toggleMenu}>Show all components</Button>
        <div className="logoWrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" height="60" alt="logo" />
        </div>
        <CSSTransition
          in={showMenu}
          timeout={400}
          classNames="menu"
          unmountOnExit
          appear
        >
          <nav>
            <ul className="nav">
              <li><NavLink onClick={this.toggleMenu} exact to="/">Home</NavLink></li>
              <li><NavLink onClick={this.toggleMenu} to="/button">Button</NavLink></li>
            </ul>
          </nav>
        </CSSTransition>
      </div>
    );
  }
};

export default Navigation;