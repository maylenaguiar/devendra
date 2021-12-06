import React from 'react';
import Item from "./Item";

const ItemList = ({ items }) => {
	
	return (
			<div className="cards">
				{items.map((item) => {
					return <Item key={item.Id} item={item} />;
				})}
			</div>
	);
};

export default ItemList;