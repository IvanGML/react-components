import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './input.css';

const Input = ({
    className, id, label, error, ...attrs
}) => {

    const classes = cx(
        'input',
        className,
        { error },
    )

    return (
        <div className="inputWrapper">
            { label && <label className="inputLabel" htmlFor={id}>{label}</label>}
            { attrs.required && <span className="inputRequired">Required</span>}
            <input 
                name={id}
                className={classes} 
                id={id}
                {...attrs}
                />
            { error && <span className="inputError">{error}</span>}
        </div>
    );
};

Input.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
};

Input.defaultProps = {
    className: '',
    label: '',
    error: '',
};

export default Input;