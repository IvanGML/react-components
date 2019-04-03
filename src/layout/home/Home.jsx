import React, { Fragment } from 'react';
import './home.css';
import { NavLink } from "react-router-dom";

const RouterLink = props => <NavLink {...props} className="list-link" />;

const Home = () => (
    <Fragment>
        <h1>Home page</h1>
        <ul className='list'>
            <li className='list-item'>
                <RouterLink to='/'>home</RouterLink>
            </li>
            <li className='list-item'>
                <RouterLink to='/button'>button</RouterLink>
            </li>
            <li className='list-item'>
                <RouterLink to='/group-button'>button group</RouterLink>
            </li>
            <li className='list-item'>
                <RouterLink to='/icon'>icon</RouterLink>
            </li>
        </ul>
    </Fragment>

);

export default Home;