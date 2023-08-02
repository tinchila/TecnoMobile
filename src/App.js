import React from 'react'
import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import Error from '../src/components/Pages/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from '../src/components/Pages/Contact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import SingIn from '../src/components/Pages/SingIn';
import SingUp from '../src/components/Pages/SingUp';
import Checkout from './components/Checkout/Checkout';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer.js';


function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout />} />
          <Route path={'/singin'} element={<SingIn/>}/>
          <Route path={'/singup'} element={<SingUp/>}/>
          <Route path={"*"} element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

