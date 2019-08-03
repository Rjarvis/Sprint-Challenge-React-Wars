import React from 'react'
import { Card, Icon } from 'semantic-ui-react';
import APIfetch from '../APIcomponents/APIfetch.js';

const data = APIfetch(address);

const Card = () => (
    <Card
    //   image={data.}
      header={data.name}
    //   meta='Friend'
    //   description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    //extra={extra}
    />
);

export default Card;