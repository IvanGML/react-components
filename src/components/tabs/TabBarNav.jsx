import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './tabBarNav.css';

const TabBarNav = ({ navLabel, className, onChangeActiveTab }) => {
    const classes = cx(
        className,
        'nav-item',
    );

    return (
        <button
            type="button"
            className={classes}
            onClick={() => { onChangeActiveTab(navLabel); }}
        >
            {navLabel}
        </button>
    );
};

TabBarNav.propTypes = {
    navLabel: PropTypes.string,
    className: PropTypes.string,
    onChangeActiveTab: PropTypes.func,
};

TabBarNav.defaultProps = {
    navLabel: 'Tab',
    className: '',
    onChangeActiveTab: () => { },
};

export default TabBarNav;