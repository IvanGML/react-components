import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ButtonGroup = ({ children, vertical, className, ...attrs }) => {
    const classes = cx(
        'btn-group',
        { vertical },
        className
    )
    return (
        <div className={classes} {...attrs}>
            {children}
        </div>
    );
};

ButtonGroup.propTypes = {
    children: PropTypes.node,
    vertical: PropTypes.bool,
    className: PropTypes.string,
};

ButtonGroup.defaultProps = {
    children: null,
    vertical: false,
    className: '',
};

export default ButtonGroup;