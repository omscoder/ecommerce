import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import data from "../ItemListContainer/Mock-data";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer () {
    const [item, setItem] = useState ([]);
    const getItem=(id)=>{
        return new Promise((resolve, reject) => {
            const prod =data.find(p=>p.id===parseInt(id))
            setTimeout(()=>{
                resolve(prod);
            }, 2000);
        });
    };

    useEffect(()=>{
        getItem(1).then((data)=>{
            setItem(data);
        });
    },[]);

    return(
        <div>
            <ItemDetail prod={prod}/>
        </div>
    );
};

export default ItemDetailContainer;