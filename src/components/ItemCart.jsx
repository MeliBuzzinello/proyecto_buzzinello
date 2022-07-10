import React, { useContext } from "react";
import { MiContext } from "../context/CartContext";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import "./ItemCart.css";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import swal from 'sweetalert';


export default function ItemCart() {
  const { carrito, getItemPrice, clearCart, getItemCant, removeItem } = useContext(MiContext);
 
  let cantCart = getItemCant();

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const handleFinal = ()=>{
    for (let i = 0; i < carrito.length; i++) {
      if(carrito[i].cantidad  > carrito[i].stock){
        swal({
          title: `La cantidad supera el stock disponible del producto ${carrito[i].name}`,
          text:`SOLO SE REALIZARA EL ENVIO POR EL STOCK DISPONIBLE`,
          icon: 'error',
          button: 'Aceptar'
        });
    }
  }}

  if (cantCart === 0) {
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
          <AddShoppingCartIcon  color="disabled" sx={{ fontSize: 100 }}/>
          <Typography variant="h5" sx={{ margin: 5 }}>
            Todavía no agregaste ningún producto al carrito
          </Typography>
          <Link to="/productos"><button className='btnCkeckout'>EMPEZAR A COMPRAR</button></Link>
        </Paper>
      </>
    )
  }
  

  
  return (
    <>
      <div className="contGral">
        <div>
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: "80%",
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "center", margin: 2 }}>CARRITO</Typography>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: "auto" }}></ButtonBase>
              </Grid>
              <Grid item xs container direction="row" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" color="text.secondary">
                    Producto
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="body2" color="text.secondary">
                    Cantidad
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="body2" color="text.secondary">
                    Precio unitario
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="text.secondary">
                  Precio total
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ cursor: "pointer" }}
                  variant="body2"
                ></Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
      {/* PRODUCTOS */}
        <div>
          {carrito?.map((item) => {
            return (
              <Paper
                key={item.id}
                sx={{
                  p: 2,
                  margin: "auto",
                  maxWidth: "80%",
                  flexGrow: 1,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item>
                  <Link to={'/item/'+ item.id} >
                    <ButtonBase sx={{ width: 'auto', height: 128 }}>
                      <Img alt="producto" src={item.image} />
                    </ButtonBase></Link>
                  </Grid>
                  <Grid item xs container direction="row" spacing={2}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        {item.name}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="body2" gutterBottom>
                        {item.cantidad}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography variant="body2" color="text.secondary">
                        ${item.price}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" component="div">
                      ${item.price * item.cantidad}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={() => removeItem(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            );
          })}
        </div>

        <Paper
          sx={{
            textAlign: "center",
            p: 2,
            margin: "auto",
            maxWidth: "80%",
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Typography variant="h5">
            PRECIO TOTAL ${getItemPrice()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            TOTAL DE PRODUCTOS: {getItemCant()}
          </Typography>
          <button className='btnCkeckout' onClick={clearCart}>
            Vaciar carrito
          </button>
          <Link to="/checkout"><button onClick={()=>handleFinal()} className='btnCkeckout'>Finalizar compra</button></Link>
        </Paper>
      </div>
    </>
  );
}
