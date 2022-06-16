import NavBar from "./components/NavBar";
import './App.css';
import ItemListContainer from './components/ItemListContainer'
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contacto from "./components/Contacto";



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
    <Route path="/categoria/:urlid" element={<ItemListContainer/>} />
    <Route path="/item/:urlid" element={<ItemListContainer/>} />

    <Route/>

  </Routes>
  </BrowserRouter>



  {/* <NavBar/> */}
  {/* <ItemListContainer greeting={'Juan'}/>
  <ItemCount stock={5} inicial={1} onAdd={onAdd}/> */}
  {/* <ItemDetailContainer /> */}
  </>
}

export default App;
