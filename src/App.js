import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greating={'Saludos desde marte'}/>
      <ItemDetailContainer/>
      <header className="App-header">
        
      </header>
    </div>
  );
};

export default App;
