import NavBar from "./components/NavBar";
import './App.css';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from "./components/ItemCount";

function App() {

  const onAdd  = (cantidad)=> {
      alert(`Tiene ${cantidad} productos en el carrito`);
  }

  return <>
  <NavBar/>
  <ItemListContainer greeting={'Juan'}/>
  <ItemCount stock={5} inicial={1} onAdd={onAdd}/>
  </>
}

export default App;
