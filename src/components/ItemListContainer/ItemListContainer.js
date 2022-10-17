
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from 'react-router-dom';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import { db } from '../../utils/firebase';


function ItemListContainer () {
    
    const {categoryId} = useParams();
   
    const [item, setItem] = useState ([]);

    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        
        const queryRef = !categoryId ? collection(db, "Items") : query(collection(db,"Items"), where("categoria", "==", categoryId));
        getDocs(queryRef).then(response => {
            const resultados = response.docs.map(doc=>{
                const newItem = {
                    id: doc.id,
                    ...doc.data(),
                }
                return newItem
            });
            setItem(resultados);
        }).finally(() => setLoading(false));
    },[categoryId]);
    
    return (
        <div>
            
            {loading? <h2>Cargando...</h2> : <ItemList listadoItems={item}/>}
        </div>
    );
};

export default ItemListContainer;