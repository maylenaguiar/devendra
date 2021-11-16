import React, { Fragment } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <Fragment>
      <NavBar />
      <ItemListContainer />
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