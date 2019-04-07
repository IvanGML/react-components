import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './image.css';

const Image = ({
    alt, classname, src, width, height, circle, ...attrs
}) => {

    if(!src) { 
        src = `https://via.placeholder.com/${width}x${height}`
    }

    const className = cx(
        'img',
        { circle },
        classname
    );

    return (
        <img
            {...attrs}
            alt={alt}
            className={className}
            src={src}
            width={width}
            height={height}
        />
    );
};

Image.propTypes = {
    alt: PropTypes.string,
    classname: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    circle: PropTypes.bool,
};

Image.defaultProps = {
    classname: '',
    src: '',
    alt: 'image name',
    width: 100,
    height: 100,
    circle: false,
};

export default Image;