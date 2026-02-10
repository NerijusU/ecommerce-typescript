import { useState, useEffect } from "react"

import axios from "axios"

import CheckoutHeader from "./CheckoutHeader"
import OrderSummary from "./OrderSummary"
import "./CheckoutPage.css"
import PaymentSummary from "./PaymentSummary"

export default function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([])
  const [paymentSummary, setPaymentSummary] = useState(null)

  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios("/api/delivery-options?expand=estimatedDeliveryTime")
      setDeliveryOptions(response.data)

      response = await axios("/api/payment-summary")
      setPaymentSummary(response.data)
    }

    fetchCheckoutData()
  }, [cart])

  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />

          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  )
}
