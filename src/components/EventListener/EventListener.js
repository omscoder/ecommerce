import { useEffect } from "react";

function EventListener(){
    
    const hacerClick = () =>{
        return(
            console.log('click')
        );
    };

    const cambiarFn = () =>{
        return(
            console.log('el texto cambio')
        );
    };

    const enviarFormulario = (event) =>{
        event.preventDefault();
        console.log('se envio el fomulario')
    };
    
    useEffect(()=>{
        window.addEventListener('click', hacerClick);

        return()=>{
            console.log('event-listener desmontado')
            window.removeEventListener('click', hacerClick);
        };

    },[]);

    return(
        <div onSubmit={enviarFormulario}>
            <h2>EventListener</h2>
            <button type='submit' onClick={hacerClick}>Hacer click</button>
            <input onChange={cambiarFn} placeholder='email'/>
        </div>
    );
};

export default EventListener;