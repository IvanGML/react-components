import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './button.css';

const Button = ({ children, onClick, active, disabled, className, invert, ...attrs }) => {
    const classes = cx(
        'btn',
        { active },
        { invert },
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
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
    onClick: PropTypes.func,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    invert: PropTypes.bool,
};
Button.defaultProps = {
    children: 'Button',
    onClick: () => { },
    active: false,
    disabled: false,
    className: '',
    invert: false,
};

export default Button;