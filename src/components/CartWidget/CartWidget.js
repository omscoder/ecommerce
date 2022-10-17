import carrito from '../../carrito.png';
import './style.css';
import {Link} from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';

function CartWidget(){
    const {getProductosTotales} = useCartContext();
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