"use client";

import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function ShopPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div>
      <ProductList onAddToCart={addToCart} />

      <h2 style={{ marginTop: 30 }}>Carrito rápido</h2>
      <Cart cart={cart} />
    </div>
  );
}
