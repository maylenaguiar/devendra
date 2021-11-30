import React from 'react';
import Logo from "../imagenes/logo.JPG";
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Link to={'/'}>
        <div className="logo">
            <img src = {Logo} alt="Mi Logo"></img>
        </div>
        </Link>
    )
}

export default Header;
