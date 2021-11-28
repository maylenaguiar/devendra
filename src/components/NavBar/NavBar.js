import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
    <nav className="container">
      <ul>
        <Link className="naveg" to='/'>Inicio
        </Link>
        <Link className="naveg" to='/About'>Sobre mi
        </Link>
        <Link className="naveg" to='/Products'>Productos
        </Link>
        <Link className="naveg" to='/Contact'>Contacto
        </Link>
        <CartWidget />
      </ul>
    </nav>
    </>
  );
};

export default NavBar;