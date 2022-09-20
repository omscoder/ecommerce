import React, { Children, useState } from "react";

export const CartContext = React.createContext();

function CartProvider({children}){
    const [listaDeCompras, setListadoDeCompras] = useState([]);

    const addItem = (prod, quantity) =>{
        console.log('prod', prod, 'quantity', quantity) 
        const newProduct = {
            id: prod.id,
            name: prod.name,
            quantity: quantity
        };
        const newArreglo = [...listaDeCompras];
        newArreglo.push(newProduct);
        setListadoDeCompras(newArreglo);
    };

    const removeItem = (itemId) =>{
        const newArreglo = listaDeCompras.filter(producto=>producto.id !== itemId);
        setListadoDeCompras(newArreglo);
    };

    const clear = () =>{
        setListadoDeCompras([]);
    };

    const isInCart = () =>{
        
    };

    return(
        <CartContext.Provider value={{listaDeCompras, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;