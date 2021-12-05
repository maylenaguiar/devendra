import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Items/Item';
import './ItemDetail.css';
import { CartContext } from '../../CartContext';

const ItemDetail = ({data}) => {
  const [cart,setCart, foo] = useContext(CartContext);
  console.log(cart);

 const newState = [{Id: 1, Producto:"Sahumerios", Precio:"$100", Cantidad: 3}];

    return (
        <div>
        <p>{data.description}</p>
        <ItemCount />
        <button className='contador' onClick={() => setCart(newState)}>Comprar</button>
        <button className='contador' onClick={() => setCart([])}>Eliminar</button>
        <button className='contador' onClick={() => foo()}>Finalizar</button>
        
        </div>
    )
};

export default ItemDetail;