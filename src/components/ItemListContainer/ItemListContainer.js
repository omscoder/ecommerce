
import data from "./Mock-data";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

function ItemListContainer ({greating}) {
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
            {item.length > 0 ? (<ItemList listadoItems={item}/>) : <div>Cargando...</div>}
        </div>
    );
};

export default ItemListContainer;