import React, { useState } from "react";
import { useCartContext } from "../Context/CartContext";
import {Link} from 'react-router-dom';
import {db} from '../../utils/firebase';
import {collection, addDoc, doc, updateDoc} from 'firebase/firestore';
import './CartContainer.css';

function CartContainer() {
    const {listaDeCompras, removeItem, clear, getPrecioTotal} = useCartContext();
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
        const querryRef = collection(db,'ordenes');
        addDoc(querryRef, orden).then(response=>{
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
                <h1>Estado de Compra</h1>
                {listaDeCompras.map(item=>(
                    <div>
                        <h3>{item.name}</h3>
                        <h3>Cantidad: {item.quantity}</h3> 
                        <h3>Precio Productos: US${item.quantityPrice}</h3>
                        <button onClick={()=>removeItem(item.id)}>Eliminar producto</button>
                    </div>
                ))}
                <h2>Precio Total: US${getPrecioTotal()}</h2>
                <button onClick={()=>clear()}>Resetear Compra</button>
                <form onSubmit={enviarOrden}>
                    <Link to='/User'>
                        <button type='submit'>Enviar orden</button>
                    </Link>
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