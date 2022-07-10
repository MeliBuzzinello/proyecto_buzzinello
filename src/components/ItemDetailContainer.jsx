import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from './Loading';
import {doc , getDoc , getFirestore } from 'firebase/firestore';
import Mistake from './Mistake';


export default function ItemDetailContainer() {

    const {idi} = useParams();

    const [loading, setLoading] = useState(Boolean);
    const [error, setError] = useState(Boolean)
    const [resulted, setResulted] = useState({});

    useEffect(() => {
        setLoading(true);
        setError(false);
        setResulted({});

        const db = getFirestore();
        const productFB = doc(db , 'products', idi);

        getDoc(productFB).then((snapshot)=>{
             setResulted({...snapshot.data(), id: snapshot.id })
        }).catch((error) => {
                      setError(true)
            }).finally(() => setLoading(false))

    }, [idi]);

    return <>
        <div>{loading && <Loading />}</div>
        <div>{error && <Mistake/>}</div>
        <div>{loading || <ItemDetail resulted={resulted}/>}</div>
    </>
}



