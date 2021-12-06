import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
    <nav className="container">
      <ul>
        <Link className="naveg" to='/'>Inicio</Link>
        <Link className="naveg" to='/About'>Sobre mi</Link>
        <Link className="naveg" to='/category/MLA1574'>Artículos Limpieza</Link>
        <Link className="naveg" to='/category/MLA1459'>Viviendas</Link>
        <Link className="naveg" to='/Contact'>Contacto
        </Link>
        <CartWidget />
      </ul>
    </nav>
    </>
  );
};

export default NavBar;