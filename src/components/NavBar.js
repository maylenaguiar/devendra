import "./NavBar.css";
import "./Cart/CartWidget";
import CardWidget from "./Cart/CartWidget";

const NavBar = () => {
  return (
    <>
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
      </ul>
    </nav>
    <CardWidget />
    </>
  );
};

export default NavBar;