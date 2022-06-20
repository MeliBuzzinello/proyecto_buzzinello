import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ItemCart from "./components/ItemCart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";



function App() {

  return <>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/home" element={<ItemListContainer/>} />
    <Route path="/productos" element={<ItemListContainer/>} />
    <Route path="/categoria/:id" element={<ItemListContainer/>} />
    
    <Route path="/item/:idi" element={<ItemDetailContainer/>} />
    <Route path="/cart" element={<ItemCart/>}/>

  </Routes>
  </BrowserRouter>

  </>
}

export default App;
