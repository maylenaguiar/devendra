import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Item = ({ item }) => {
	return (
		<div className="cards">
		<Link to={`/item/${item.id}`}> 
				<Card>
						<Image src={item.thumbnail} alt='imagen' wrapped ui={false} className='ImgCARD' />
						<Card.Content>
						<Card.Header>${item.price}</Card.Header>
						<Card.Meta>
							<span className='date'>{item.category_id}</span>
						</Card.Meta>
						<Card.Description>
							{item.title}
						</Card.Description>
						</Card.Content>
					</Card>
		</Link>
		<ItemDetailContainer />
		</div>
	);
}


export default Item;