import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";



function App() {

  // const onAdd  = (cantidad)=> {
  //     alert(`Tiene ${cantidad} productos en el carrito`);
  // }

  return <>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/home" element={<ItemListContainer/>} />
    <Route path="/productos" element={<ItemListContainer/>} />
    <Route path="/categoria/:id" element={<ItemListContainer/>} />
    
    <Route path="/item/:idi" element={<ItemDetailContainer/>} />
    <Route/>

  </Routes>
  </BrowserRouter>

  </>
}

export default App;
