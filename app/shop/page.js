"use client";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function ShopPage() {
  return (
    <div>
      <h1>Carrito</h1>
      <ProductList />
      <Cart />
    </div>
  );
}
