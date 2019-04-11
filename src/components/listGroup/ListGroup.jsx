import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './listGroup.css';


const ListGroup = ({
    className, tag: Tag, children, ...attrs
}) => {

    const classes = cx(
        'list-group',
        className
    );

    return (
        <Tag className={classes} {...attrs}>
            {children}
        </Tag>
    );
};

ListGroup.propTypes = {
    className: PropTypes.string,
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
    ]),
    children: PropTypes.node,
};

ListGroup.defaultProps = {
    className: '',
    tag: 'ul',
    children: null,
};

export default ListGroup;