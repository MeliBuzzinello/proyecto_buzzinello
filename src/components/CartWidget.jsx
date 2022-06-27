import React, { useContext } from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { MiContext } from '../context/CartContext';
import { Link } from 'react-router-dom';



function CartWidget() {

  const {getItemCant} = useContext(MiContext);

  return (
  <>
     <Link to="/cart" style={{color: 'white', textDecoration: 'none'}}>
     <ShoppingCartRoundedIcon/>
    <span>{getItemCant()}</span>
    </Link>
  </>
  )
}

export default CartWidget;