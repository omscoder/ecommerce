import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';
import {getDoc, getFirestore, doc} from 'firebase/firestore';
import {Link} from 'react-router-dom';
import './ItemDetailContainer.css';

function ItemDetailContainer () {
    const {productId} = useParams();
    
    const [item, setItem] = useState ({});

    const [loading, setLoading] = useState(true);

    const Back = () =>{
        return(
            <>
                <h2>El producto no existe</h2>
                <Link to='/'>
                    <button>Volver</button>
                </Link>
            </>
        )
    };
    

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, "Items", productId)
        getDoc(queryDoc)
        getDoc(queryDoc)
            .then(resp => {
                if (resp.data() === undefined) {
                    <Back/>
                } else {
                    setItem({id: resp.id, ...resp.data()})
                }
            })
            .catch((err) => console.log(err))
            .finally(()=> setLoading(false))
    },[productId]);

    return(
        <div>
            {loading ? <h4>Cargando...</h4> : (item.id === undefined ? <Back/> : <ItemDetail prod={item}/> )}
        </div>
    );
};

export default ItemDetailContainer;