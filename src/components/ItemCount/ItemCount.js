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

    const agregar = () =>{
        {contador>0 ? onAdd({contador}): console.log("no hay stock")};
    };

    return (
        <div>
            <button className='BotonSuma' onClick={suma}>Suma</button>
            <button className='BotonResta'onClick={resta}>Resta</button>
            <button className='AgregarACarrito'onClick={agregar}>Agregar</button>
        </div>
    );
};

export default ItemCount;