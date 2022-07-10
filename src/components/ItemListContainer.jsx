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
import Mistake from "./Mistake";

function ItemListContainer() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(Boolean);
  const [resulted, setResulted] = useState([{}]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setResulted([{}]);

    const db = getFirestore();
    const productsCollection = collection(db, "products");

    if (id) {
      const q = query(productsCollection, where("category", "==", id));
      getDocs(q)
        .then((snapshot) => {
          setResulted(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => setError(true))
        .finally(() => setLoading(false));
    } else {
      getDocs(productsCollection)
        .then((snapshot) => {
          setResulted(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => setError(true))
        .finally(() => setLoading(false));
    }

   }, [id]);


  return (
    <>
      <p className="parrafo">{`Nuestros productos`}</p>
      <div>{loading && <Loading />}</div>
      <div>{error && <Mistake/>}</div>
      <div>{loading || <ItemList resulted={resulted} />}</div>
    </>
  );
}

export default ItemListContainer;
