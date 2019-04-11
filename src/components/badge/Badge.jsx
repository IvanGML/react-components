import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './badge.css';

const Badge = ({
    className, value, circle, inline, outer, ...attrs
}) => {

    const text = typeof value === 'string' || value instanceof String;

    const classes = cx(
        'badge',
        className,
        { circle },
        { inline },
        { outer },
        { text },
        { warning: attrs.warning},
        { alert: attrs.alert},
        { success: attrs.success},
        { info: attrs.info},
    );

    return (
        <div className={classes}>
            { value }
        </div>
    );
};

Badge.propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    circle: PropTypes.bool,
    inline: PropTypes.bool,
    outer: PropTypes.bool,
};

Badge.defaultTypes = {
    className: '',
    circle: false,
    inline: false,
    outer: false,
};

export default Badge;