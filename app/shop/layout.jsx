import { CartProvider } from "../context/CartContext.jsx";
import Navbar from "./Navbar";

export default function ShopLayout({ children }) {
  return (
    <CartProvider>
      <main style={{ padding: "20px" }}>
        <header style={{ marginBottom: 24 }}>
          <h1>🛍 Carrito React / Next.js</h1>
          <Navbar />
        </header>

        {children}
      </main>
    </CartProvider>
  );
}
