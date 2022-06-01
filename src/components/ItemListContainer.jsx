import React from "react";
import './ItemListContainer.css';


function ItemListContainer({nombre}) {
    return <>
    <p className="parrafo">{`Hola ${nombre}, gracias por visitarnos!`}</p>
    </>
  }
  
  export default ItemListContainer;