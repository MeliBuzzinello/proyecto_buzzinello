import React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

function CartWidget({cant}) {
  return <>
  <ShoppingCartRoundedIcon/>
  <span>{cant}</span>
  </>
 
}

export default CartWidget;