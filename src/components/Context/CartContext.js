import React, { Children, useState } from "react";
import {createContext, useContext} from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartProvider({children}){
    const [listaDeCompras, setListaDeCompras] = useState([]);

     const isInCart = (productId) =>{
        const productExist = listaDeCompras.some(item=>item.id === productId);
        return productExist;
    };

    const addItem = (prod, quantity) =>{
        const newProduct = {
            id: prod.id,
            name: prod.name,
            price: prod.price,
            quantity: quantity
        };

        if(isInCart(prod.id)){
            const productPos = listaDeCompras.findIndex(product=>product.id === prod.id);
            const newArreglo = [...listaDeCompras];
            newArreglo[productPos].quantity = newArreglo[productPos].quantity + quantity;
            newArreglo[productPos].quantityPrice = newArreglo[productPos].quantity * newArreglo[productPos].price;
            setListaDeCompras(newArreglo);
        }else{
            const newArreglo = [...listaDeCompras];
            newProduct.quantityPrice = newProduct.quantity * newProduct.price;
            newArreglo.push(newProduct);
            setListaDeCompras(newArreglo);
        };
    };

    const removeItem = (itemId) =>{
        const newArreglo = listaDeCompras.filter(producto=>producto.id !== itemId);
        setListaDeCompras(newArreglo);
    };

    const clear = () =>{
        setListaDeCompras([]);
    };

    const getPrecioTotal = () =>{
        const precioTotal = listaDeCompras.reduce((acumulado, prod) => acumulado + prod.quantityPrice,0);
        return precioTotal;
    };

    const getProductosTotales = () => {
        const productosTotales = listaDeCompras.reduce((acumulado, prod) => acumulado + prod.quantity,0);
        return productosTotales;
    };

    return(
        <>
            <CartContext.Provider value={{listaDeCompras, addItem, removeItem, clear, getPrecioTotal, getProductosTotales}}>
                {children}
            </CartContext.Provider>
        </>
    );
};

export default CartProvider;