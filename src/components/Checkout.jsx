//@ts-check
import React from 'react'
import { useContext } from 'react';
import { MiContext } from '../context/CartContext';
import {addDoc , collection , getFirestore} from 'firebase/firestore';
import { useForm } from "react-hook-form";
import "./Checkout.css";
import { useState } from 'react';

export default function Checkout() {
  // const [name, setName] = useState('');
  // const [email , setEmail] = useState('');
  // const [cel , setCel] = useState('');
  const db = getFirestore();
  const orderCollections = collection(db , 'orders');

  const [num , setNum] = useState('');
 
  const {carrito , getItemPrice} = useContext(MiContext);

  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    const total = getItemPrice();
    
    const order = {
            data,
            items: carrito,
            total
        };
        
    addDoc(orderCollections , order).then(({id})=> {
      setNum(id);
      });

  };

  if(num){
    return(
      <div>su orden fue exitosa. Número de orden {num}</div>
    )
  }
  console.log(num)
  // function handleClick(){
  //   const total = getItemPrice();

  //   const order = {
  //       buyer: {name, email, cel},
  //       items: carrito,
  //       total
  //   };
  //   console.log(order)
  //   addDoc(orderCollections , order).then(({id})=> console.log(id))
  // }


  return (
     <>
    {/* <div>Checkout</div>
    <input onChange={(e)=>setName(e.target.value)} placeholder='nombre' ></input>
    <input onChange={(e)=>setEmail(e.target.value)} placeholder='correo' ></input>
    <input onChange={(e)=>setCel(e.target.value)} placeholder='telefono' ></input>
  
    <button onClick={()=> handleClick()}>Enviar</button> */}

     <form onSubmit={handleSubmit(onSubmit)} className='formCheckout'>
      <input className='formInput' placeholder='nombre' {...register("name", { required: true,  pattern: /^[A-Za-z]+$/i  })} />
      {errors.name?.type === 'required' && <p className='msjError'>Nombre requerido</p>}
      {errors.name?.type === 'pattern' && <p className='msjError'>El nombre esta incorrecto</p>}

      <input className='formInput' placeholder='correo'{...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email?.type === 'required' && <p className='msjError'>Correo electronico requerido</p>}
      {errors.email?.type === 'pattern' && <p className='msjError'>El e-mail no es valido</p>}

      <input className='formInput' placeholder='telefono' type={'number'} {...register("cel", { required: true,  maxLength: 10, minLength: 10 })} />
      {errors.cel && (<p className='msjError'>El número telefonico debe tener 10 digitos</p>)}
      
      <input className='btnCkeckout' type="submit"/>
      
    </form>
    </> 
  )
  
  
}
