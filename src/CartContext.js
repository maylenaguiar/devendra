import React, { createContext, useState } from 'react';
import ItemCount from '../src/components/ItemCount/ItemCount'
// 1 - CREAR EL CONTEXTO
export const CartContext = createContext();

// STATE que le pasamos al useState
const initialState = [
    {Id: 1, Producto:"Sahumerios", Precio:"$100", Cantidad: 1}
];

const foo = () => {
	console.log(initialState);
};

// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(initialState);

	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER
	return (
		<CartContext.Provider value={[cart, setCart, foo]}>
			{children}
		</CartContext.Provider>
	);
};
