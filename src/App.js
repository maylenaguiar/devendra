import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <Fragment>
      <Header />
      <NavBar />
      <div className="App">
        <h1 style={{color: "purple" }}>
          Bienvenidos a la experiencia Devendra
        </h1>
        <h2 style={{color: "violet" }}>
          Tienda Mágica
        </h2>
      </div>
      <ItemListContainer />
    </Fragment>
  );
}

export default App;