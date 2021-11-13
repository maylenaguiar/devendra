import React, { Component } from 'react';
import '../productos/productos';
import Cards from './Cards';

class Productos extends Component{
    render() {
        return (
            <div className ="cards">
            <Cards Producto= "Sahumerios" 
            Precio ="$100" 
            Aromas = "Vainilla, Sándalo, etc" 
            Foto = "https://http2.mlstatic.com/D_NQ_NP_2X_750123-MLA44067617984_112020-F.webp"/>
            <Cards Producto= "Mix de pétalos" 
            Precio ="$500" 
            Aromas = "Frutos rojos, Maderas, etc" 
            Foto = "https://cdn.shopify.com/s/files/1/0427/7469/2005/products/x-www-mix-de-petalos-comestibles_2048x.jpg?v=1595998415"/>
            <Cards Producto= "Bomba sahumadora" 
            Precio ="$300" 
            Aromas = "Madera, Plátano, etc" 
            Foto = "https://http2.mlstatic.com/D_NQ_NP_640353-MLA42438117480_072020-O.jpg"/>


            </div>
        );
       
    }
}

export default Productos;