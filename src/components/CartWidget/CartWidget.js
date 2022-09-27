import carrito from '../../carrito.png';
import './style.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function CartWidget(){
    const {getProductosTotales} = useContext(CartContext);
    return (
        <div>
            <Link to={'/cart'}>
                <img className='cartwidget' src={carrito} alt="carrito"/>
                {
                    getProductosTotales() > 0 ?
                    <span>{getProductosTotales()}</span>
                    :
                    ''
                }
            </Link>
        </div>
    );
};

export default CartWidget;