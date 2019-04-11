import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './listGroupItem.css';


const ListGroupItem = ({
    className, tag: Tag, children, active, disabled, ...attrs
}) => {

    const Elem = attrs.href && Tag === 'li' ? 'a' : Tag;

    const classes = cx(
        'list-group-item',
        className,
        { active },
        { disabled },
    );

    return (
        <Elem className={classes} {...attrs}>
            {children}
        </Elem>
    );
};

ListGroupItem.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
    ]),
    children: PropTypes.node,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
};

ListGroupItem.defaultProps = {
    className: '',
    tag: 'li',
    children: null,
    disabled: false,
    active: false,
};

export default ListGroupItem;