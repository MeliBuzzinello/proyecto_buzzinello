import './NavBar.css';

function NavBar() {
    return <nav className='nav'> 
        <div><a href="#"><img src="/logo192.png" className="logo" alt="logo" /></a></div>
    <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Servicios</a></li>
    <li><a href="#">Contacto</a></li>
    </ul>
    <ul>
    <li><a href="#" className='login'>Login</a></li>
    </ul> 
  </nav>
  }
  
  export default NavBar;
  