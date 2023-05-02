import React, { createContext, useContext, useState } from 'react'
import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product';
import ProductDetails from './Pages/ProductDetails'
import CocktailDetail from './Pages/CocktailDetail'
import Cocktail from './Pages/Cocktail'
import PrivateRoute from './Component/PrivateRoute';
import Login from './Pages/Login';



export const WrapperContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  return (<>
    <WrapperContext.Provider value={{ searchValue, setSearchValue, isLogin, setIsLogin }}>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<PrivateRoute><Product /></PrivateRoute>}></Route>
        <Route path="/product/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>}></Route>
        <Route path="/cocktail/:id" element={<PrivateRoute><CocktailDetail /></PrivateRoute>}></Route>
        <Route path="/cocktail" element={<PrivateRoute><Cocktail /></PrivateRoute>}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </WrapperContext.Provider>

  </>
  );
}

export default App;
