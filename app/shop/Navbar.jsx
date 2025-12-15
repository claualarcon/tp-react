"use client";

import Link from "next/link";
import { useCart } from "../hooks/useCart";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (acc, p) => acc + p.quantity,
    0
  );

  return (
    <nav style={{ display: "flex", gap: 16 }}>
      <Link href="/shop">Inicio</Link>

      <Link href="/shop/cart" style={{ position: "relative" }}>
        🛒 Carrito
        {totalItems > 0 && (
          <span
            style={{
              position: "absolute",
              top: -8,
              right: -12,
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: 12,
            }}
          >
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
}