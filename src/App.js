import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import './App.css';
import ItemCart from "./components/ItemCart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { initializeApp } from "firebase/app";
import Checkout from "./components/Checkout";



function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyATPEx6MNa_VMXJsfaExJM55X9z2Q9pr3U",
    authDomain: "react-baks.firebaseapp.com",
    projectId: "react-baks",
    storageBucket: "react-baks.appspot.com",
    messagingSenderId: "984606847079",
    appId: "1:984606847079:web:c7e4191f2c59f58a0ba4c2"
  };
  
  initializeApp(firebaseConfig);

  return ( 
  <>
  <CartContext>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/home" element={<ItemListContainer/>} />
    <Route path="/productos" element={<ItemListContainer/>} />
    <Route path="/categoria/:id" element={<ItemListContainer/>} />
    <Route path="/item/:idi" element={<ItemDetailContainer/>} />
    <Route path="/cart" element={<ItemCart/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
  </Routes>
  </BrowserRouter>
  <Footer/>
  </CartContext>
  </>
  )
}

export default App;
