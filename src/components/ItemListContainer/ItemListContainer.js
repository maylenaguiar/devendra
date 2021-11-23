import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css"
import ItemList from '../Items/ItemList';
import { helper, requestData } from "../helper/helper";

const ItemListContainer= () => { 
    const [loader, setLoader] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setLoader (true);
async function pedirDatos () {
let datosLlegando = await requestData();
setProducts(datosLlegando)
setLoader(false);
        }
        pedirDatos();
    }, []);
    return(
        <div>
            {loader 
            ? "Cargando..."
           : <h1 className="items">Productos Recomendados</h1> && (
            <ItemList  productos= {products} />
    )}
        </div>
    );     
};

export default ItemListContainer;