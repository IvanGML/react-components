/* eslint-disable */
import React, { Fragment } from 'react';
import Icon from './Icon';
import ButtonGroup from '../buttonGroup/ButtonGroup';
import Button from '../button/Button';

const Sandbox = () => (
    <Fragment>

        <h2><span>1. Base icon:</span></h2>
        <Icon size={1.5} onClick={() => { console.log('!!!'); }} name="address-book" />

        <h2><span>2. Icons button group:</span></h2>
        <ButtonGroup>
            <Button active>
                <Icon name="align-right" />
            </Button>
            <Button>
                <Icon name="align-center" />
            </Button>
            <Button>
                <Icon name="align-left" />
            </Button>
            <Button>
                <Icon name="align-justify" />
            </Button>
        </ButtonGroup>

        <h2><span>3. Icon with size 8rem</span></h2>
        <Icon title="badge" size={8} name="address-card" />

        <h2><span>4. Disabling icon functionality:</span></h2>
        <Icon size={2} disabled onClick={() => { console.log('!!!'); }} name="angellist" />

    </Fragment>
);

export default Sandbox;
/* eslint-enable */