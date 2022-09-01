import { useEffect } from "react";

const CicloDeVida = ({numero}) => {
    useEffect(()=>{
        return()=>{
            
        }
    },[]);
    return (
    <div>
        <label>El contador esta en {numero}</label>
    </div>
    );
};

export default CicloDeVida;