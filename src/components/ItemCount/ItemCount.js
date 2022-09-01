import { useState } from "react";
import CicloDeVida from "../CicloDeVida/CicloDeVida";

function ItemCount (){
    const [contador, setContador] = useState(0);
    const suma = () =>{
    setContador(contador + 1);
    };
    const resta = () =>{
        setContador(contador - 1);
    };
    const agregar = () =>{
        console.log("se agrego");
    };
    return (
        <div>
            {contador <= 5 ? <CicloDeVida numero={contador}/> : null}
            <button className='BotonSuma' onClick={suma}>Suma</button>
            <button className='BotonResta'onClick={resta}>Resta</button>
            <button className='AgregarACarrito'onClick={agregar}>Agregar</button>
        </div>
    );
};

export default ItemCount;