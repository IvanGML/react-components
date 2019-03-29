import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './button.css';

const Button = ({ children, onClick, active, disabled, className, ...attrs }) => {
    const classes = cx(
        'btn',
        { active },
        className,
    )
    const onClickAction = e => {
        if (disabled) {
            e.preventDefault();
        } else {
            return onClick();
        }
    }
    const Tag = attrs.href ? 'a' : 'button';
    return (
        <Tag 
            className={classes}
            disabled={disabled}
            onClick={onClickAction}
            {...attrs}>
            {children}
        </Tag>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
};
Button.defaultProps = {
    children: 'Button',
    onClick: () => { },
    active: false,
    disabled: false,
    className: '',
};

export default Button;