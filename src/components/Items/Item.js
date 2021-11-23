import React from 'react';
import "./Item.css";
import { Card, Image } from 'semantic-ui-react';
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ Id, Producto, Precio, Foto }) => (
	<div className="cards">
    <Card key={Id}>
		<Image src={Foto} wrapped ui={false} />
		<Card.Content>
			<Card.Header>{Producto}</Card.Header>
			<Card.Meta>
				<span className='date'>{Precio}</span>
			</Card.Meta>
			<Card.Description>{Foto}</Card.Description>
		</Card.Content>
	</Card>
    <ItemCount />
    </div>
);

export default Item;