import './App.css'
import axios from 'axios'
import { CheckoutPage } from './Pages/CheckoutPage'
import { HomePage } from './Pages/HomePage'
import { Routes, Route } from 'react-router'
import { OrdersPage } from './Pages/OrdersPage'
import React, { useEffect, useState } from 'react'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("/api/cart-items?expand=product")
      .then((response) => {
        setCart(response.data);
      });
  }, []); // ✅ FIXED

  return (
    <Routes>
      <Route path='/' element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage cart={cart} />} /> 
    </Routes>
  )
}

export default App
