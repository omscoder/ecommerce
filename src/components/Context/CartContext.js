import React, { Children, useState } from "react";

export const CartContext = React.createContext();

function CartProvider({children}){
    const [listaDeCompras, setListadoDeCompras] = useState([]);

     const isInCart = (productId) =>{
        const productExist = listaDeCompras.some(item=>item.id === productId);
        return productExist;
    };

    const addItem = (prod, quantity) =>{
        console.log('prod', prod, 'quantity', quantity) 
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
            setListadoDeCompras(newArreglo);
        }else{
            const newArreglo = [...listaDeCompras];
            newProduct.quantityPrice = newProduct.quantity * newProduct.price;
            newArreglo.push(newProduct);
            setListadoDeCompras(newArreglo);
        };
    };

    const removeItem = (itemId) =>{
        const newArreglo = listaDeCompras.filter(producto=>producto.id !== itemId);
        setListadoDeCompras(newArreglo);
    };

    const clear = () =>{
        setListadoDeCompras([]);
    };

    const getPrecioTotal = () =>{
        const precioTotal = listaDeCompras.reduce((acumulado, item)=>acumulado+item.quantityPrice,0);
        console.log(precioTotal)
        
    };

    return(
        <CartContext.Provider value={{listaDeCompras, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;