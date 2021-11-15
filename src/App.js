import React, { Fragment } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Cards from './components/productos/productos';


function App() {
  
  return (
    <Fragment>
      <NavBar />
      <itemListContainer />
      <div className="App">
        <h1 style={{color: "purple" }}>
          Bienvenidos a la experiencia Devendra
        </h1>
        <h2 style={{color: "violet" }}>
          Tienda Mágica
        </h2>
      </div>
    </Fragment>
  );
}

export default App;