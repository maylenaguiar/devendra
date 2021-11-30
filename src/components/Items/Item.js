import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Item = ({ Id, Producto, Precio, Foto }) => (
	<div className="cards">
    <Card key={Id}>
		<Image src={Foto} wrapped ui={false} />
		<Card.Content>
			<Card.Header>{Producto}</Card.Header>
			<Card.Meta>
				<span className='date'>{Precio}</span>
			</Card.Meta>
			<Card.Description>
				<Link to={`/detalles/${Id}`} className="btn btn-primary">
				<button>Ver más</button>
				</Link>
			</Card.Description>
		</Card.Content>
	</Card>
    <ItemCount />
	<ItemDetailContainer />
    </div>
);

export default Item;