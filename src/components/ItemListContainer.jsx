//@ts-check
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./ItemListContainer.css";
import Loading from "./Loading";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer() {
  const { id } = useParams();

  const [loading, setLoading] = useState(Boolean);
  const [error, setError] = useState(Boolean);
  const [resultado, setResultado] = useState([{}]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setResultado([{}]);

    const db = getFirestore();
    const productsCollection = collection(db, "products");

    setTimeout(() => {
    if (id) {
      const q = query(productsCollection, where("category", "==", id));
      getDocs(q)
        .then((snapshot) => {
          setResultado(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => setError(true))
        .finally(() => setLoading(false));
    } else {
      getDocs(productsCollection)
        .then((snapshot) => {
          setResultado(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => setError(true))
        .finally(() => setLoading(false));
    }
  }, 2000);
    // setTimeout(() => {
    //   fetch('https://run.mocky.io/v3/3399c6e0-f68f-465e-a691-f3eda10f4351')
    //   .then(res => res.json())
    //   .then(res =>{
    //         setResultado(res)
    //         setResultado( (!id) ? res : (res.filter(item => item.tipo === id)))
    //       })
    //   .catch((error) => {
    //         setError(true)
    //       })
    //   .finally(() => setLoading(false))
    // }, 2000);
  }, [id]);

  return (
    <>
      <p className="parrafo">{`Nuestros productos`}</p>
      <div>{loading && <Loading />}</div>
      <div>{error && "Hubo un error en el servidor"}</div>
      <div>{loading || <ItemList resultado={resultado} />}</div>
    </>
  );
}

export default ItemListContainer;
