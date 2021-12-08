import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import Item from '../Items/Item';
import './ItemDetail.css';
import { CartContext } from '../../CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  const [cart,setCart, foo] = useContext(CartContext);
  console.log(cart);

 const newState = [{Id: 1, Producto:"Sahumerios", Precio:"$100", Cantidad: 3}];

    return (
        <div className='detalle'>
        <img src={item.thumbnail} alt={item.title} width={300} />
            <h2>{item.price}</h2>
            <h3>{item.title}</h3>
        <ItemCount />
        <button className='contador' onClick={() => setCart(newState)}>Comprar</button>
        <button className='contador' onClick={() => setCart([])}>Eliminar</button>
        <Link to ='/Cart'> <button className='contador' onClick={() => foo()}>Finalizar Compra</button>
        </Link>
        </div>
    )
};

export default ItemDetail;