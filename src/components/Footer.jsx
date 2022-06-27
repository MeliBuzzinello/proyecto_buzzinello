import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import AddCardIcon from '@mui/icons-material/AddCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';
import './Footer.css';
import { Grid } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <>
    <div className='footer'>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        justifyContent={'center'}
        width={'100%'}
      >
        <Grid xs={2} sm={4} md={4} >
        <Item><AddCardIcon/><h2>3 Y 6 CUOTAS SIN INTERÉS</h2><p>Programa AHORA 12</p></Item></Grid>
        <Grid xs={2} sm={4} md={4} >
        <Item><LocalShippingIcon/><h2>ENVÍO GRATIS</h2><p>para compras mayores a $5.000</p></Item></Grid>
        <Grid xs={2} sm={4} md={4} >
        <Item><LockIcon/><h2>SITIO SEGURO</h2><p>Protegemos tus datos</p></Item></Grid>
        </Stack>
      </Grid>
    </div>
    <div className='footerLegales'>
    <h6>COPYRIGHT MELI- 2022. TODOS LOS DERECHOS RESERVADOS.</h6>
  </div>
  </>
  );
}
