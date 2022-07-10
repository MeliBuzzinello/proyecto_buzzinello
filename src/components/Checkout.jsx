//@ts-check
import React from "react";
import { useContext } from "react";
import { MiContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useForm } from "react-hook-form";
import "./Checkout.css";
import { useState } from "react";
import { Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { doc, updateDoc } from "firebase/firestore";

export default function Checkout() {
  const db = getFirestore();
  const orderCollections = collection(db, "orders");

  const [finalize, setFinalize] = useState("");

  const { carrito, getItemPrice, clearCart } = useContext(MiContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const total = getItemPrice();

    const order = {
      data,
      items: carrito,
      total,
    };

    addDoc(orderCollections, order).then(({ id }) => {
      setFinalize(id);
    });

    // Actualizacion de stock en firebase
    for (let i = 0; i < carrito.length; i++) {
      const idCart = carrito[i].id;
      const stock = carrito[i].stock - carrito[i].cantidad;
      const updateStock = doc(db, "products", idCart);
      updateDoc(updateStock, { stock: stock });
    }

    clearCart();
  };

  if (finalize) {
    return (
      <>
        <Paper
          sx={{
            textAlign: "center",
            p: 2,
            margin: "auto",
            marginTop: 10,
            marginBlock: 10,
            maxWidth: "80%",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <CheckCircleOutlineIcon color="disabled" sx={{ fontSize: 100 }} />
          <Typography variant="h5" sx={{ margin: 5 }}>
            Su orden fue realizada exitosamente.
          </Typography>
          <Typography variant="h6" sx={{ margin: 5 }}>
            NÚMERO DE ORDEN: {finalize}
          </Typography>
          <Link to="/productos">
            <button className="btnCkeckout">SEGUIR COMPRANDO</button>
          </Link>
        </Paper>
      </>
    );
  }

  return (
    <>
      <Paper
        sx={{
          textAlign: "center",
          p: 2,
          margin: "auto",
          marginTop: 10,
          marginBlock: 10,
          maxWidth: "80%",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="formCheckout">
          <h4 className="titleCheck">
            INGRESE SUS DATOS PARA CONTINUAR CON LA COMPRA
          </h4>

          <input
            className="formInput"
            placeholder="nombre"
           {...register("name", { required: true, pattern: /^[A-Za-z\s]+$/i })}
          />
          {errors.name?.type === "required" && (
            <p className="msjError">Nombre requerido</p>
          )}
          {errors.name?.type === "pattern" && (
            <p className="msjError">El nombre esta incorrecto</p>
          )}

          <input
            className="formInput"
            placeholder="correo electronico"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email?.type === "required" && (
            <p className="msjError">Correo electronico requerido</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="msjError">El e-mail no es valido</p>
          )}

          <input
            className="formInput"
            placeholder="teléfono"
            type={"number"}
            {...register("cel", {
              required: true,
              maxLength: 10,
              minLength: 10,
            })}
          />
          {errors.cel && (
            <p className="msjError">
              El número telefonico debe tener 10 digitos
            </p>
          )}

          <input className="btnCkeckout" type="submit" />
        </form>
      </Paper>
    </>
  );
}
