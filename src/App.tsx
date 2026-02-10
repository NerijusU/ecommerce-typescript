import { useEffect, useState } from "react"

import axios from "axios"
import { Routes, Route } from "react-router"

import "./App.css"
import CheckoutPage from "./pages/checkout/CheckoutPage"
import HomePage from "./pages/home/HomePage"
import OrdersPage from "./pages/orders/OrdersPage"
import TrackingPage from "./pages/TrackingPage"

function App() {
  const [cart, setCart] = useState([])

  const loadCart = async () => {
    const response = await axios("/api/cart-items?expand=product")
    setCart(response.data)
  }

  useEffect(() => {
    loadCart()
  }, [])

  return (
    <Routes>
      {/* <Route path='/' element={<HomePage />}></Route> */}
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  )
}

export default App
