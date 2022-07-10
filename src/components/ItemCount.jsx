import React, { useState } from 'react';
import './ItemCount.css';
import { Icon } from '@mui/material';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import { Link } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';


function ItemCount({ stock, onAdd}) {
    const [cantidad, setCantidad] = useState(1);

   const sumar = () => {
    cantidad < stock ? setCantidad(cantidad + 1) : setCantidad(cantidad + 0);
    };

    const restar = () => {
        cantidad > 1 ? setCantidad(cantidad - 1) : setCantidad(cantidad - 0);
    };

    if(stock <= 0){
        return (
            <>
            <Link to='/' element={<ItemListContainer/>}className='contCount'><button className='btnCkeckout'>Sin stock</button></Link>
            </>
        )
    }


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