import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventListener from './components/EventListener/EventListener';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
        <NavBar/>
          <Routes>
            <Route path='/'element={<ItemListContainer greating={'Saludos desde marte'}/>}/>
            <Route path='/productos/:categoryId'element={<ItemListContainer/>}/>
            <Route path='/item/:productId'element={<ItemDetailContainer/>}/>
            <Route path='/event-listener'element={<EventListener/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
