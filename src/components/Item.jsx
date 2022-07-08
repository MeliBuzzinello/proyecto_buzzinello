import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';

export default function Item({resultado}) {
  const {id, name, color, price, image} = resultado;
  
  return (
    <>
    <Card sx={{ maxWidth: 290, margin: 1 }}>
   <CardActionArea>
   <Link to={'/item/'+ id} element={<ItemDetailContainer/>}>
         <CardMedia
          component="img"
          image={image}
          alt="Imagen"
        /></Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Color:{color}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'center' }}>
      <Link to={'/item/'+ id} element={<ItemDetailContainer/>}><button className='btnCkeckout'>Ver más</button></Link>
      </CardActions>
    </Card>
    </>
    )
}
