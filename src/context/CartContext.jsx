import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';


export const MiContext = createContext();
// const {Provider} = MiContext;

export const CartContext = ({children}) =>  {

    const [carrito, setCarrito] = useState([]);

    //booleano- ver si el producto a agregar esta en el carrito o no
    const isInCart = (id) => {
        return carrito.some(item => item.id === id)
    }
    
    //agregar el producto al carrito, y si esta duplicado aumenta cantidad- 
    const addItem = (producto, cantidad) => {
        const newProdu = {...producto, cantidad}

        if (isInCart(newProdu.id)){
            let prod = carrito.find(item => item.id === newProdu.id);
            let prodIndex = carrito.indexOf(prod);
            const copiaProdu = [...carrito];
            copiaProdu[prodIndex].cantidad += cantidad;
            setCarrito(copiaProdu);
        } else {
            setCarrito([...carrito, newProdu])
        }
    }

    //vaciar carrito
    const clearCart = () => {
        setCarrito([]);
    }

    //eliminar 1 producto
    const removeItem = (id) => {
        return setCarrito(carrito.filter(item => item.id !== id));
    }

    // cantidad total de productos
    const getItemCant = () => {
        return carrito.reduce((acc, item) => acc += item.cantidad, 0);
    }

    //precio total del carrito
    const getItemPrice = () => {
        return carrito.reduce((acc, item)=> acc += item.cantidad * item.price, 0)
    }


  return (
    <MiContext.Provider value={{carrito, setCarrito, isInCart, addItem, clearCart, removeItem, getItemCant, getItemPrice}}>{children}</MiContext.Provider>
  )
}

