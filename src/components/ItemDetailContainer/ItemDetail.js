import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Items/Item';
import './ItemDetail.css';

const ItemDetail = ({data}) => {
   const OnClickCard = () =>{
       alert ('Productos agregados al carrito exitosamente')
   }
    return (
        <div>
        <p>{data.description}</p>
        <ItemCount />
        <button className='contador' onClick={OnClickCard}>Agregar al carrito</button>
        </div>
    )
};
export default ItemDetail;