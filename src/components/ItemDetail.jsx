import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemCount from './ItemCount';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MiContext } from '../context/CartContext';
import ItemListContainer from './ItemListContainer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Grid } from '@mui/material';

export default function ItemDetail({ resulted }) {
    //const theme = useTheme();
    const { id, name, description, price, stock, image } = resulted;

    const [value, setValue] = React.useState(2);
    const [showCont, setShowCont] = useState(true);

    const {isInCart, addItem} = useContext(MiContext);

    const onAdd  = (cantidad)=> {
        setShowCont(false);
        isInCart(id);
        addItem(resulted, cantidad);
    }

    return (
        <Card sx={{ display: 'flex', justifyContent: 'center', height: '90%', width: '90%', margin: '30px'}}>
              <Grid container spacing={2}>
              <Grid item xs={12} md={4}> 
            <CardMedia
                component="img"
                sx={{ width: 280 }}
                image={image}
                alt="Imagen"
            />
            </Grid>
            <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box
                    sx={{'& > legend': { mt: 2 }, textAlign: 'end', marginRight: '28px' }}>
                    <Typography component="legend">Calificación</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    </Box>

                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Descripción:{description}
                    </Typography>
                    <Typography color="text.secondary" >
                        Stock disponible:{stock ? stock : 'Sin stock' }
                    </Typography>
                    <Typography component="div" variant="h5">
                        ${price}
                    </Typography>
                </CardContent>

                {showCont ? <ItemCount stock={stock} onAdd={onAdd}/> : <Link to='/cart' element={<ItemCart/>} className='contCount'><button className='btnCkeckout'><AddShoppingCartIcon/> Ir al carrito</button></Link> } 
                
               <Link to='/' element={<ItemListContainer/>} className='contCount'><button className='btnCkeckout'>Seguir compra</button></Link>

                <div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Medios de pago y promociones</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                - Ahora 3|6|12 cuotas sin Interés. <br />
                                - Tarjetas de crédito y débito. <br />
                                - Mercado pago
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Envíos a todos el país</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                - Envío a domicilio: A partir de 2 a 7 días hábiles. <br />
                                - Retiro por sucursal del correo Andreani: A partir de 7 días hábiles.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </Box>
            </Grid>
            </Grid>
        </Card>
    );
}

