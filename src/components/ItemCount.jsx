import React, { useState } from 'react';
import './ItemCount.css';
import { Icon } from '@mui/material';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';


function ItemCount({ stock, onAdd}) {
    const [cantidad, setCantidad] = useState(1);

    // useEffect(() => {
    //     if(cantidad === stock){
    //     alert('Supero el stock')}
    // });

   const sumar = () => {
    cantidad < stock ? setCantidad(cantidad + 1) : setCantidad(cantidad + 0);
    };

    const restar = () => {
        cantidad > 1 ? setCantidad(cantidad - 1) : setCantidad(cantidad - 0);
    };


    return <>
        <div className='contCount'>
        <Icon onClick={restar} className='icon' >remove_circle</Icon>
        <span className='txtCount' >{ cantidad }</span>
        <Icon onClick={sumar} className='icon' >add_circle</Icon>
        <br></br>
        <button className='btnCkeckout' onClick={()=> onAdd(cantidad)} ><ShoppingCartRounded /> Agregar al carrito</button>
        </div>
       </>
}

export default ItemCount;