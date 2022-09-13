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
    
    const onAdd = (cantidad) =>{
        console.log(cantidad);
        return(
            <div>
                <h2>Su conteo esta en {cantidad}</h2>
                {contador>0 ? onAdd({contador}): console.log("no hay stock")};
            </div>
        );
    };

    return (
        <div>
            <button className='BotonSuma' onClick={suma}>Suma</button>
            <button className='BotonResta'onClick={resta}>Resta</button>
            <button className='AgregarACarrito'onClick={onAdd}>Agregar</button>
        </div>
    );
};

export default ItemCount;