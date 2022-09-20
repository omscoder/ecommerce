import React from "react";
import { CartContext } from "../Context/CartContext";
import {useContext} from 'react';

function CartContainer() {
    const {listaDeCompras, removeItem, clear}= useContext(CartContext);
    return(
        <div>
            <h1>CartContainer</h1>
            <div>{listaDeCompras.map(item=>(
                <div>
                    {item.name} Cantidad {item.quantity}
                    <button onClick={()=>removeItem(item.id)}>Eliminar producto</button>
                </div>
                ))}
                <button onClick={()=>clear()}>Despejar</button>
            </div>
        </div>
    );
};

export default CartContainer;