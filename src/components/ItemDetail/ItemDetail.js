import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartContext";
import {useContext} from "react";

function ItemDetail ({prod}){

    const {addItem} = useContext(CartContext);

    const [contador, setContador] = useState(0);

    const onAdd =(algo) =>{
        console.log('hizo click', algo)
        setContador(algo);
        addItem(prod, algo)
    };

    return(
        <div>
            <h2>{prod.name}</h2>
            <h2>{prod.price}</h2>
            <image src={prod.image} alt={prod.name}/>
            <h6>{contador}</h6>
            <ItemCount stock={prod.stock} initial={1} onAdd={onAdd} />
        </div>
    );
};


export default ItemDetail;