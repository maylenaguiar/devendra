import React from 'react';
import './Cards.css';
import { Card, Image } from 'semantic-ui-react';
import ItemCount from '../ItemCount/ItemCount';


const Cards = ({Producto, Precio, Aromas, Foto}) =>  (
  <div className='cards'>
  <Card>
    <Image src={Foto} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{Producto}</Card.Header>
      <Card.Meta>{Precio}</Card.Meta>
      <Card.Description>
        {Aromas}
      </Card.Description>
    </Card.Content>
  </Card>
  <ItemCount />
  </div>
);

export default Cards;