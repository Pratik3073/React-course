import './App.css'
import axios from 'axios'
import { CheckoutPage } from './Pages/checkout/CheckoutPage'
import { HomePage } from './Pages/home/HomePage'
import { Routes, Route } from 'react-router'
import { OrdersPage } from './Pages/orders/OrdersPage'
import React, { useEffect, useState } from 'react'

function App() {
  const [cart, setCart] = useState([]);

  const loadCart  = async () =>{
    const response = await axios.get("/api/cart-items?expand=product")
     setCart(response.data);
   };

  useEffect(() => {
   
    loadCart();
  }, []); 

  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path='checkout' element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path='orders' element={<OrdersPage cart={cart} />} /> 
    </Routes>
  )
}

export default App
