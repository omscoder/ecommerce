import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import data from "../ItemListContainer/Mock-data";

function ItemDetailContainer () {
    const [item, setItem] = useState ([]);
    const getData = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(data);
        }, 2000);
    });
    
    const getItem =()=>{
        fetch('./ItemListContainer/Mock-data.js')
        .then((data) =>{
            setItem(data);
            return (data.results);
        });
    };

    useEffect(()=>{
        getItem();
    },[]);
    useEffect(() =>{
        getData.then((result) => {
            setItem(result);
        });
    }, []);
    
    return (
    <div>
        {item.length > 0 ? (<ItemList listadoItems={item}/>) : <div>Cargando...</div>}
    </div>
    );
};

export default ItemDetailContainer;