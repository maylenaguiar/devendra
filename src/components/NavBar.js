import "./NavBar.css";
import { Icon } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <nav className="container">
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Sobre mi</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
        <a href="#"><Icon name='shopping cart' /> </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;