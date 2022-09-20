import carrito from '../../carrito.png';
import './style.css';
import {Link} from 'react-router-dom';

function CartWidget(){
    return (
        <div>
            <Link to={'/cart'}>
                <img className='cartwidget' src={carrito} alt="carrito"/>
            </Link>
        </div>
    );
};

export default CartWidget;