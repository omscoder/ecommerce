import React, { useState } from "react";
import { CartContext } from "../Context/CartContext";
import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {db} from '../../utils/firebase';
import {collection, addDoc, doc, updateDoc} from 'firebase/firestore';

function CartContainer() {
    const {listaDeCompras, removeItem, clear, getPrecioTotal}= useContext(CartContext);
    const [idOrden, setIdOrden] = useState('');
    
    
    const enviarOrden = (event) =>{
        event.preventDefault();
        const orden ={
            buyer:{
            name: event.target[0],
            telefono: event.target[1],
            mail: event.target[2]
            },
            items:listaDeCompras,
            total: getPrecioTotal()
        };
        console.log('orden enviada', orden)
        const querryRef = collection(db,'ordenes');
        addDoc(querryRef, orden).then(response=>{
            console.log('response', response)
            setIdOrden(response.id);
        });
    };

    const updateOrden = () =>{
        const querryRef = doc(db, 'ordenes', 'id q no me sale');
        updateDoc(querryRef, )
    };


    return(
        <div>
            <button onClick={updateOrden}>Actualizar orden</button>
            {idOrden && <p>se creo su orden {idOrden}</p>}
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
                <form onSubmit={enviarOrden}>
                    <label>Nombre:</label>
                    <input type='text'></input>
                    <label>Telefono:</label>
                    <input type='text'></input>
                    <label>Mail:</label>
                    <input type='email'></input>
                    <button type='submit'>Enviar orden</button>
                </form>
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