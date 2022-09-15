import { useEffect, useState } from "react";
import data from "../ItemListContainer/Mock-data";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';

function ItemDetailContainer () {
    const {productId} = useParams();
    
    const [item, setItem] = useState ({});
    
    const getItem = (id) => {
        return new Promise((resolve, reject) => {
            const item = data.find(item=>item.id === parseInt(id));


            resolve(item);
            setTimeout(()=>{
                resolve(item);
            }, 2000);
        }); 
    };

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            console.log('producto', producto);
            setItem(producto);
        }
        getProducto();
    },[productId]);

    console.log('item:', item);

    return(
        <div>
            <ItemDetail prod={item}/>
        </div>
    );
};

export default ItemDetailContainer;