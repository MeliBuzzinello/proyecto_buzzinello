import React, { useContext } from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { MiContext } from '../context/CartContext';



function CartWidget( ) {

  const {getItemCant} = useContext(MiContext);

  return <>
  <ShoppingCartRoundedIcon/>
  <span>{getItemCant()}</span>
  </>
 
}

export default CartWidget;