import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css"
import ItemList from '../Items/ItemList';

const ItemListContainer = ( {categoryId}) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=5`)
                .then(response => response.json())
                .then(respJSON => {console.log(respJSON.results); setItems(respJSON.results)})
                .catch(error => console.log('Error: ', error));
        }, 2000);
        }, [categoryId])
    return (
        <div className='items'>
            <h1 className='items'>
               {categoryId}
            </h1>
           
                {
                    items.length > 0 ?
                        <ItemList items={items} />
                        :
                        <p>Cargando...</p>

                }  
        
                    
        </div>
    )
}
export default ItemListContainer;
