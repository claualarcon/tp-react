"use client";

import { useCart } from "../../hooks/useCart";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h2>Carrito</h2>

      {cart.length === 0 && <p>No hay productos</p>}

      {cart.map((p) => (
        <div key={p.id}>
          {p.title} x {p.quantity} — ${p.price * p.quantity}
        </div>
      ))}

      {cart.length > 0 && (
        <p>
          Total: $
          {cart.reduce((acc, p) => acc + p.price * p.quantity, 0)}
        </p>
      )}
    </div>
  );
}
