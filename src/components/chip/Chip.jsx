import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './chip.css';
import Image from '../image/Image';
import Icon from '../icon/Icon';

const Chip = ({
    text, withImage, withClose, withIcon, imageSrc, imgAlt, iconName, className,
    id, onChipClick, onCloseClick
}) => {

    const onChipClickAction = e => onChipClick(id);

    const onCloseClickAction = e => {
        e.stopPropagation();
        onCloseClick(e, id);
    }

    const classNames = cx(
        'chip',
        className
    );

    return (
        <div className={classNames} onClick={onChipClickAction}>
            {withImage &&
                <span className='chipImage'>
                    <Image src={imageSrc} alt={imgAlt} width={24} height={24} />
                </span>
            }
            {withIcon &&
                <span className='chipIcon'>
                    <Icon name={iconName} />
                </span>
            }
            <span className='chipText'>{text}</span>
            {withClose &&
                <span className='chipClose' onClick={onCloseClickAction}>
                    <Icon name='times' />
                </span>
            }
        </div>
    );
};

Chip.propTypes = {
    text: PropTypes.string.isRequired,
    withImage: PropTypes.bool,
    withIcon: PropTypes.bool,
    withClose: PropTypes.bool,
    imageSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    iconName: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    onChipClick: PropTypes.func,
    onCloseClick: PropTypes.func,
};

Chip.defaultProps = {
    withImage: false,
    withIcon: false,
    withClose: false,
    imageSrc: '',
    imgAlt: 'chip image',
    iconName: 'address-card',
    className: '',
    id: null,
    onChipClick: ()=>{},
    onCloseClick: ()=>{},
}

export default Chip;