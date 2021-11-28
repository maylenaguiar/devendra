import React from 'react';
import Item from '../Items/Item';

const ItemDetail = ({data}) => {
    return (
        <div>
        <p>{data.description}</p>
        </div>
    )
};
export default ItemDetail;
