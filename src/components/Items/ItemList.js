import React from 'react';
import Item from "./Item";

const ItemList = ({ productos }) => {
	
	return (
			<div className="cards">
				{productos.map((product) => {
					return <Item key={product.Id} {...product} />;
				})}
			</div>
	);
};

export default ItemList;