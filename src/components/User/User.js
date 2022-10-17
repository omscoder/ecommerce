import { useCartContext } from "../Context/CartContext";
import { addDoc, collection, getFirestore, query, where, documentId, writeBatch, getDocs, Firestore } from "firebase/firestore";
import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { async } from "@firebase/util";

function User() {

    const navigate = useNavigate()
    const [dataForm, setDataForm] = useState({nombre:'', telefono:'', mail:'', mail2:''})
    
    const {listaDeCompras, getPrecioTotal, clear} = useCartContext()

    const generateOrden = async (e) => {
        e.preventDefault()

        if(dataForm.mail === dataForm.mail2){
            let date = new Date().toDateString();
            let orden = {}
            orden.date = date
            orden.buyer = dataForm
            orden.items = listaDeCompras.map (cartItem =>{
                const id = cartItem.id
                const name = cartItem.name
                const price = cartItem.price * cartItem.quantity
                return{id, name, price}
            })
            orden.total = getPrecioTotal()


            const db = getFirestore()
            const queryCollectionItems = collection(db, 'ordenes')
            await addDoc(queryCollectionItems, orden)
                .then(({id}) => alert ('El codigo de su orden es' + id +"          ¡¡Gracias por su compra!!"))
                .then(() => navigate('/'))
                .catch(err => console.log (err))
                .finally(clear)
            
            const queryCollection = collection(db, 'items')
            const queryStockUpdate = await query(
                queryCollection,
                where(documentId(), 'in', listaDeCompras.map(it =>it.id)))
            
            const batch = writeBatch(db)
            await getDocs(queryStockUpdate)
                .then(resp => resp.docs.forEach(res => batch.update(res.ref,{
                    sock: res.data().stock - listaDeCompras.find(item => item.id === res.id).quantity
                })))
            batch.commit()
        }

        else {
            alert ('Los mails no coinciden')
        }
    }

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form
            className=""
            onSubmit={generateOrden}
        >
            <input
            required
            type='text'
            name='name'
            placeholder="Ingrese Nombre"
            value={dataForm.name}
            onChange={handleChange}
            />

            <input
            required
            type='text'
            name='telefono'
            placeholder="Ingrese Telefono"
            value={dataForm.phone}
            onChange={handleChange}
            />

            <input
            required
            type='text'
            name='mail'
            placeholder="Ingrese Mail"
            value={dataForm.mail}
            onChange={handleChange}
            />

            <input
            required
            type='text'
            name='mail2'
            placeholder="Confirme Mail"
            value={dataForm.mail2}
            onChange={handleChange}
            />

            <button>Finalizar Compra</button>

        </form>
    )

};

export default User;
