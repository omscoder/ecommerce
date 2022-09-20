import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContainer from './components/CartContainer/CartContainer';
import CartProvider from './components/Context/CartContext';

function App() {
  

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <div>
          <NavBar/>
            <Routes>
              <Route path='/'element={<ItemListContainer greating={'Saludos desde marte'}/>}/>
              <Route path='/productos/:categoryId'element={<ItemListContainer/>}/>
              <Route path='/item/:productId'element={<ItemDetailContainer/>}/>
              <Route path='/cart'element={<CartContainer/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
