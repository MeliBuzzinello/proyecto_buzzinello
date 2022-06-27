import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { useContext } from 'react';
import { MiContext } from '../context/CartContext';

const drawerWidth = 240;


function NavBar (props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const {getItemCant} = useContext(MiContext);
   
  let cantCart = getItemCant();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <img src="./assets/img/logoFondoBlanco.png" alt="logo" />
      </Typography>
      <Divider />
      <List>
                  <Link to="/productos" className='linkMobile'> PRODUCTOS </Link>
                  <Link to="/categoria/bota" className='linkMobile'> BOTAS </Link>
                  <Link to="/categoria/sandalia" className='linkMobile'> SANDALIAS </Link>
                  <Link to="/categoria/zapatilla" className='linkMobile'> ZAPATILLAS </Link>
         </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}  className='boxNav'>
       <div className='subNav'>💳 Cuotas sin interés   |   Envíos a todo el país 🚚  </div>
      <AppBar component="nav">
        <Toolbar className='boxNav'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           <img src="./assets/img/logo.jpg" alt="logo" className='logoimg'/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className='boxLink'>
                  <Link to="/productos" className='linkNav'> PRODUCTOS </Link>
                  <Link to="/categoria/bota" className='linkNav'> BOTAS </Link>
                  <Link to="/categoria/sandalia" className='linkNav'> SANDALIAS </Link>
                  <Link to="/categoria/zapatilla" className='linkNav'> ZAPATILLAS </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {cantCart > 0 && <CartWidget/>}
          </Box>

        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ p: 3}}> 
     
      <Toolbar />
       
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar ;
