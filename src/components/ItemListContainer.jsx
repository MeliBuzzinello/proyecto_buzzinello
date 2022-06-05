import React from "react";
import './ItemListContainer.css';


function ItemListContainer({greeting}) {
    return <>
    <p className="parrafo">{`Hola ${greeting}, gracias por visitarnos!`}</p>
    </>
  }
  
  export default ItemListContainer;