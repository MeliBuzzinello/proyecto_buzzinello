//@ts-check
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from './Loading';
import {doc , getDoc , getFirestore } from 'firebase/firestore';


export default function ItemDetailContainer() {

    const {idi} = useParams();

    const [loading, setLoading] = useState(Boolean);
    const [error, setError] = useState(Boolean)
    const [resultado, setResultado] = useState({});

    useEffect(() => {
        setLoading(true);
        setError(false);
        setResultado({});

        const db = getFirestore();
        const productoFB = doc(db , 'products', idi);

        getDoc(productoFB).then((snapshot)=>{
             setResultado({...snapshot.data(), id: snapshot.id })
        }).catch((error) => {
                      setError(true)
            }).finally(() => setLoading(false))

        // setTimeout(() => {
        //     fetch('https://run.mocky.io/v3/3399c6e0-f68f-465e-a691-f3eda10f4351')
        //     .then(res => res.json())
        //     .then(res =>{
        //           setResultado(res)
        //           setResultado(res.find(item => item.id === idi))
        //         })
        //     .catch((error) => {
        //           setError(true)
        //         })
        //     .finally(() => setLoading(false))
        //   }, 2000);
    }, [idi]);

    return <>
        <div>{loading && <Loading />}</div>
        <div>{error && 'Hubo un error en el servidor'}</div>
        <div>{loading || <ItemDetail resultado={resultado} />}</div>
    </>
}



