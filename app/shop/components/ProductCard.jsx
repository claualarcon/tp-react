"use client";

import { useCart } from "../../hooks/useCart";
import Image from "next/image";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 15,
        borderRadius: 10,
        width: 250,
      }}
    >
      <Image
        src={product.image}
        width={200}
        height={200}
        alt={product.title}
        style={{ width: "100%", height: "auto" }}
      />

      <h3>{product.title}</h3>
      <h3>{product.description}</h3>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>Agregar</button>
    </div>
  );
}
