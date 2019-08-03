import React from 'react'
import { Card, Icon } from 'semantic-ui-react';
import APIfetch from '../APIcomponents/APIfetch.js';

//const data = APIfetch(address);

const CharacterCard = props => {
    const data = props.dataToUse;
    return(
        <Card
        name={data.name}
        //   meta='Friend'
        gender={data.gender}
        //extra={extra}
        />
        );
    }

export default CharacterCard;