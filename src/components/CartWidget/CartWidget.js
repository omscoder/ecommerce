import carrito from '../../carrito.png';
import './style.css';

const CartWidget=() =>{
    return (
        <div>
            <img className='cartwidget' src={carrito} alt="carrito"/>
        </div>
    );
};

export default CartWidget;