import { useEffect, useState } from "react"

import axios from "axios"

import ProductsGrid from "./ProductsGrid"
import Header from "../../components/Header"
import "./HomePage.css"

export default function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios("/api/products")
      setProducts(response.data)
    }

    getHomeData()
  }, [])

  return (
    <>
      <title>Ecomerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  )
}
