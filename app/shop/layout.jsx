export default function ShopLayout({ children }) {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🛍 Carrito React / Next.js</h1>

      <nav style={{ marginBottom: "20px" }}>
        <a href="/shop">Inicio</a> | <a href="/shop/cart">Carrito</a>
      </nav>

      {children}
    </div>
  );
}
