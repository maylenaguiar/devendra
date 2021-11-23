import React from 'react';
import Logo from "../imagenes/logo.JPG";
import "./Header.css";

const Header = () => {
    return (
        <div className="logo">
            <img src = {Logo} alt="Mi Logo"></img>
        </div>
    )
}

export default Header;
