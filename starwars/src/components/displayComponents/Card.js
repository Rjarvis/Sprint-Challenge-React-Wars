import React from 'react'
import { Card, Icon } from 'semantic-ui-react';

// const extra = (
//     <a>
//         <Icon name = {dataToUse.name} />
//     </a>
// );
const CharacterCard = props => {
    console.log("Card.js: CharacterCard: props", props);
    const dataToUse = props.dataToUse;
    const height = dataToUse.height;
    const mass = dataToUse.mass;
    const gender = dataToUse.gender;

    const descriptionString = String("Height "+height +"; Mass "+ mass +"; Gender "+ gender);
    return(
        <Card
        // image = {}
        header = {dataToUse.name}
        description = {descriptionString}
        // extra = {extra}
        />
        );
    }

export default CharacterCard;