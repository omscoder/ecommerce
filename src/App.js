import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContainer from './components/CartContainer/CartContainer';
import CartProvider from './components/Context/CartContext';
import User from './components/User/User';

function App() {

  return (
    
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/'element={<ItemListContainer/>}/>
            <Route path='/productos/:categoryId'element={<ItemListContainer/>}/>
            <Route path='/item/:productId'element={<ItemDetailContainer/>}/>
            <Route path='/cart'element={<CartContainer/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/cart' element={<CartContainer/>} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>  
    
  );
};

export default App;
