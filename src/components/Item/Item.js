import {Link} from 'react-router-dom';

function Item ({prod}) {

    return(
        <div>
            <img src={prod.image} alt={prod.name}/>
            <h1>{prod.name}</h1>
            <p>US${prod.price}</p>
            <Link to={`/item/${prod.id}`}>
                <button className="boton-ver">Ver detalle...</button>
            </Link>
        </div>
    );
};

export default Item;