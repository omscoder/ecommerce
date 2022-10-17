import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../Context/CartContext";
import './ItemDetail.css';

function ItemDetail ({prod}){

    const {addItem} = useCartContext();

    const [contador, setContador] = useState(0);

    const onAdd =(algo) =>{
        setContador(algo);
        addItem(prod, algo)
    };

    return(
        <div>
            <h2>{prod.name}</h2>
            <p>{prod.description}</p>
            <h2>US${prod.price}</h2>
            <img src={prod.image} alt={prod.name}/>
            <h3>Cantidad seleccionada: {contador}</h3>
            <ItemCount stock={prod.stock} initial={1} onAdd={onAdd} />
        </div>
    );
};


export default ItemDetail;