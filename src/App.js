import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

import Home from '../src/Views/Home/Home';
import About from '../src/Views/About/About';
import Category from '../src/Views/Category/Category';
import ItemView from '../src/Views/ItemView/ItemView';
import Contact from '../src/Views/Contact/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "./components/ItemDetailContainer/ItemDetail";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./CartContext";

function App() {
  return (
    
    <Router>
      <CartProvider>
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
      <Route path='/' element={<Home />}/>
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/category/:categoryId' element={<Category />}/>
      <Route path='/item/:id' element={<ItemView />}/>
      <Route path='/Cart' element={<Cart />}/>
      </Routes>
      </CartProvider>
    </Router>
    
  );
}

export default App;