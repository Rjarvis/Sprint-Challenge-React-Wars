import React from 'react'
import { Card, Icon } from 'semantic-ui-react';
import APIfetch from '../APIcomponents/APIfetch.js';

//const data = APIfetch(address);

const CharacterCard = props => (
    <Card
        header={props.dataToUse.name}
    //   meta='Friend'
    //   description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    //extra={extra}
    />
);

export default CharacterCard;