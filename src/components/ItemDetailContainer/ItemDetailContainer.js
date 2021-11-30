import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { helper, requestData } from "../helper/helper";

const ItemDetailContainer = () => {
    const [items, setItems]= useState([]);
    
    useEffect(() => {
       setTimeout(()=>{
        fetch ("https://fakestoreapi.com/products?limit=4")
        .then((response) => response.json())
        .then((json)=> setItems(json));
       }, 2000) 
    
    }, []);

        return (
            <div>
                {items.map((item)=>{
                    return <ItemDetail key ={item.id} data= {item} />;
                })}
            </div>
        )   
    };

export default ItemDetailContainer