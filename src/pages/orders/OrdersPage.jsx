import { useEffect, useState } from "react"

import axios from "axios"

import "./OrdersPage.css"
import OrderDetails from "./OrderDetails"
import OrdersHeader from "./OrdersHeader"
import Header from "../../components/Header"

export default function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios("/api/orders?expand=products")
      setOrders(response.data)
    }
    fetchOrdersData()
  }, [])

  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        {orders.map((order) => {
          return (
            <div key={order.id} className="order-container">
              <OrdersHeader order={order} />
              <OrderDetails order={order} />
            </div>
          )
        })}
      </div>
    </>
  )
}
