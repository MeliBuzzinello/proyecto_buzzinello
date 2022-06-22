import React, { useContext } from 'react'
import { MiContext } from '../context/CartContext';


export default function ItemCart() {

  const {carrito, getItemPrice, clearCart, getItemCant } = useContext(MiContext);

  return (
    <>
    <h2>MI CARRITO PROVISORIO</h2>

    <div>{carrito?.map(item => {
          return   <div key={item.id}>
                   <h6>Producto: {item.title}</h6>
                   <h6>Precio: {item.price}</h6>
                   <h6>Cantidad: {item.cantidad}</h6>
                   </div>
        })}
    </div>
    <div>precio total ${getItemPrice()}</div>
    <div>total de productos: {getItemCant()}</div>
    <button onClick={clearCart}>Vaciar carrito</button>
    </>
  )
}
