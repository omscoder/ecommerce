import './style.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

function NavBar() {
    return (
        <div className='navbar-container'>
            <div>
                <h1>FitShop</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink as={Link} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink as={Link} to='/productos/pesas'>Pesas</NavLink>
                    </li>
                    <li>
                        <NavLink as={Link} to='/productos/ropa'>Ropa</NavLink>
                    </li>
                    <li>
                        <NavLink as={Link} to='/productos/accesorios'>Accesorios</NavLink>
                    </li>
                    
                </ul>
            </div>
            <CartWidget/>
            <div>
                <button>Login</button>
            </div>
        </div>
    );
};

export default NavBar;