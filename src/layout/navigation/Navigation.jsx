import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Button from '../../components/button/Button';
import OutsideClickHandler from 'react-outside-click-handler';
import './navigation.css';

class Navigation extends Component {
  state = {
    showMenu: false
  }
  toggleMenu = () => this.setState((prevState) => ({ showMenu: !prevState.showMenu }));
  isOpen = () => this.state.showMenu ? this.toggleMenu() : null;
  render() {
    const { showMenu } = this.state;
    return (
      <div className="navigation">
        <Button className="transparent-btn" onClick={this.toggleMenu}>Show all components</Button>
        <div className="logoWrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" height="60" alt="logo" />
        </div>
        <OutsideClickHandler onOutsideClick={this.isOpen}>
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
                <li><NavLink onClick={this.toggleMenu} to="/group-button">Button group</NavLink></li>
                <li><NavLink onClick={this.toggleMenu} to="/icon">Icon</NavLink></li>
                <li><NavLink onClick={this.toggleMenu} to="/image">Image</NavLink></li>
                <li><NavLink onClick={this.toggleMenu} to="/chip">Chip</NavLink></li>
                <li><NavLink onClick={this.toggleMenu} to="/badge">Badge</NavLink></li>
                <li><NavLink onClick={this.toggleMenu} to="/listGroup">List group</NavLink></li>
              </ul>
            </nav>
          </CSSTransition>
        </OutsideClickHandler>
      </div>
    );
  }
};

export default Navigation;