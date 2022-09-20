import { useState } from "react";


function ItemCount ({stock, initial, onAdd}){
    const [contador, setContador] = useState(initial);

    const suma = () =>{
        if(contador<stock){
        setContador(contador + 1);
        };
    };

    const resta = () =>{
        if (contador>initial) {
        setContador(contador - 1);
        };
    };
    
    return (
        <div>
            <p>Stock disponible: {stock}</p>
            <p>{contador}</p>
            <button disabled={stock===0} className='BotonSuma' onClick={suma}>Suma</button>
            <button disabled={stock===0} className='BotonResta'onClick={resta}>Resta</button>
            <button disabled={stock===0} className='AgregarACarrito'onClick={()=>{onAdd(contador)}}>Agregar</button>
        </div>
    );
};

export default ItemCount;