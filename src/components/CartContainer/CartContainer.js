import React from "react";
import { CartContext } from "../Context/CartContext";
import {useContext} from 'react';
import {Link} from 'react-router-dom';

function CartContainer() {
    const {listaDeCompras, removeItem, clear, getPrecioTotal}= useContext(CartContext);
    return(
        <div>
            {
            listaDeCompras.length > 0 ?
            <div>
                <h1>CartContainer</h1>
                {listaDeCompras.map(item=>(
                    <div>
                        <h3>{item.name}</h3> 
                        <h3>Cantidad {item.quantity}</h3> 
                        <h3>Precio Productos {item.quantityPrice}</h3>
                        <button onClick={()=>removeItem(item.id)}>Eliminar producto</button>
                    </div>
                ))}
                <h3>Precio Total: {getPrecioTotal()}</h3>
                <button onClick={()=>clear()}>Despejar</button>
            </div>
            :
            <div>   
                <Link to='/'>
                    <h3>ir al listado de productos</h3>
                </Link>
            </div>
            }
        </div>
    );
};

export default CartContainer;