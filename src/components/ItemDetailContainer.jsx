import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import Loading from './Loading';

export default function ItemDetailContainer() {
    const [loading, setLoading] = useState();
    const [error, setError] = useState()
    const [resultado, setResultado] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        setResultado([]);

        const getItem = new Promise((res, rej) => {
            setTimeout(() => {
                fetch('./productos.json')
                .then((respuesta) => respuesta.json())
                .then((data) => {
                    console.log(data)
                    setResultado(data.find(e => e > e.id))
                    console.log(resultado)
                })
                .catch((error) => {
                    console.log(error)
                    setError(true)
                })
                .finally(() => {
                    setLoading(false)
                })
            }, 2000);
        })
    }, []);



    return <>
        <div>{loading && <Loading/>}</div>
        <div>{error && 'Hubo un error en el servidor'}</div>
        <div>{loading || <ItemDetail resultado={resultado}/>}</div>
    </>
}



