import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import './ItemListContainer.css';


function ItemListContainer({greeting}) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [resultado, setResultado] = useState([]);

    useEffect(() => {
      setLoading(true);
      setError(false);
      setResultado([]);

      const llamadoProduct = new Promise ((res, rej)=>{
        setTimeout(() => {
          res([
          {id:1,title:'Botas Raven',description:'Altura Caña95 cm Altura puntera5 mm Altura Talón95 mm ColorNegro MaterialCuero', price:12000, pictureUrl:'./assets/img/raven.webp'},
          {id:2,title:'Botas Slouchy',description:'Altura Caña19 cm Altura puntera5 mm Altura Talón65 mm ColorSuela MaterialGamuzón', price:24600, pictureUrl:'./assets/img/slouchy.webp'},
          {id:3,title:'Botas Styles',description:'Altura Caña8 cm Altura puntera5 mm Altura Talón95 mm ColorNegro MaterialCharol', price:15000, pictureUrl:'./assets/img/styles.webp'},
          {id:4,title:'Botas Bowie',description:'Altura Caña17 cm Altura puntera5 mm Altura Talón70 mm ColorSuela MaterialCuero', price:28900, pictureUrl:'./assets/img/bowie.webp'}])
        }, 2000);

      });

      llamadoProduct
        .then((res)=>{
          console.log(res)
          setResultado(res)
         })
        .catch((error)=>{
          console.log(error)
          setError(true)
         })
        .finally(()=>{
          setLoading(false)
        })
    }, []);
    


    return <>
    <p className="parrafo">{`Hola ${greeting}, gracias por visitarnos!`}</p>
    <div>{loading && 'loading...'}</div>
    <div>{error && 'Hubo un error en el servidor'}</div>
    <ItemList resultado={resultado}/>
    </>
  }
  
  export default ItemListContainer;