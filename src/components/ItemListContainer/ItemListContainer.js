
import data from "./Mock-data";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from 'react-router-dom';

function ItemListContainer ({greating}) {
    const {categoryId} = useParams();
    console.log('categoryId', categoryId);
   
    const [item, setItem] = useState ([]);
    
    const getData = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(data);
        }, 2000);
    });
    
    useEffect(() =>{
        getData.then((result) => {
            if(categoryId){
                const newProducts = result.filter(item=>item.categoria===categoryId);
                setItem(newProducts);
            }else{
                setItem(result);
            };
        });
    }, [categoryId]);
    
    return (
        <div>
            <h2>{greating}</h2>
            {item.length > 0 ? (<ItemList listadoItems={item}/>) : <div>Cargando...</div>}
        </div>
    );
};

export default ItemListContainer;