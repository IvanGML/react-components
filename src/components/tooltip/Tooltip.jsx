import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './tooltip.css';

class Tooltip extends Component {

    state = {
        showTooltip: false,
    }

    static propTypes = {
        content: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
        position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
            style: PropTypes.objectOf(PropTypes.string),
    }

    static defaultProps = {
        position: 'top',
        style: {},
    }

    onChangeTooltipVisibility = () => this.setState({showTooltip: !this.state.showTooltip});

    onMouseMove = () => this.onChangeTooltipVisibility();

    render() {
        const { children, content, style, position } = this.props;
        const classes = cx(
                'tooltip',
                position,
            );

        const { showTooltip } = this.state;

        return (
            <span className="tooltipWrapper">
                { showTooltip && <span 
                                    className={classes} 
                                    style={style}>
                                        { content }
                                </span> 
                }
                <span 
                    className="targetElement"
                    onMouseOver={this.onMouseMove} 
                    onMouseLeave={this.onMouseMove}>
                        { children }
                </span>
            </span>
        );
    }
}

export default Tooltip;