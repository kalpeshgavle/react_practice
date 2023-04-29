import React from 'react'
import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails'
import CocktailDetail from './Pages/CocktailDetail'
import Cocktail from './Pages/Cocktail'


function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
      <Route path="/cocktail/:id" element={<CocktailDetail />}></Route>
      <Route path="/cocktail" element={<Cocktail />}></Route>
    </Routes>
  </>
  );
}

export default App;
