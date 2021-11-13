import React, { Fragment } from "react";
import NavBar from "./components/NavBar";


function App() {
  
  return (
    <Fragment>
      <NavBar />
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