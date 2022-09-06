import ItemCount from "../ItemCount/ItemCount";
import data from "./Mock-data";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greating}) => {
    const [item, setItem] = useState ([]);
    const getData = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(data);
        }, 2000);
    });
    
    useEffect(() =>{
        getData.then((result) => {
            setItem(result);
        });
    }, []);
    
    return (
    <div>
        <h2>{greating}</h2>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        {item.length > 0 ? (<ItemList listadoItems={item}/>) : <div>Cargando...</div>}
    </div>
    );
};

function onAdd (cantidad){
    console.log(cantidad);
    return(
        <div>
            <h2>Su conteo esta en {cantidad}</h2>
        </div>
    );
};

export default ItemListContainer;