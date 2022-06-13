import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import './ItemCount.css';
import { Fab, Icon } from '@mui/material';


function ItemCount({ stock, onAdd}) {
    const [cantidad, setCantidad] = useState(1);

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
        <div className='contCount'>
        <Icon onClick={restar} color="primary">remove_circle</Icon>
        <span className='txtCount' >{ cantidad }</span>
        <Icon onClick={sumar} color="primary">add_circle</Icon>
        <br></br>
        <Button onClick={()=> onAdd(cantidad)} variant="contained" className='btnCount'>Agregar al carrito</Button>
        </div>
       
       </>
}

export default ItemCount;