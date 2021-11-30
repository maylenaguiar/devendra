import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

import Home from '../src/Views/Home/Home';
import About from '../src/Views/About/About';
import Contact from '../src/Views/Contact/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    
    <Router>
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
      <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/About' exact element={<About />} />
      <Route path='/Products' exact element={<ItemListContainer />} />
      <Route path='/Contact' exact element={<Contact />} />
      <Route path= '/Products/:Aromas' exact element={<ItemListContainer />}/>
      <Route path= '/detalles/:Id' exact element={<ItemDetailContainer />}/>
      </Routes>
    </Router>
    
  );
}

export default App;