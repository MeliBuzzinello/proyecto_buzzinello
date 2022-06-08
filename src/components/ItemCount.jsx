import React, { useEffect, useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, inicial, onAdd}) {
    const [cantidad, setCantidad] = useState(inicial);

    useEffect(() => {
        if(cantidad === stock){
        alert('Supero el stock')}
    });

   const sumar = () => {
    cantidad < stock ? setCantidad(cantidad + 1) : setCantidad(cantidad + 0);
    };

    const restar = () => {
        cantidad > 1 ? setCantidad(cantidad - 1) : setCantidad(cantidad - 0);
    };


    return <>
        {/* <div className='contCount'>
        <button onClick={restar}>-</button>
        <span className='txtCount'>{ cantidad }</span>
        <button onClick={sumar}>+</button> 
        <br></br>
        <button onClick={()=> onAdd(cantidad)}>Agregar al carrito</button>
        </div> */}
       </>
}

export default ItemCount;