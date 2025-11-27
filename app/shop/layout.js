export default function ShopLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "Arial", padding: "20px" }}>
        <h1>🛍 Carrito React / Next.js</h1>

        <nav style={{ marginBottom: "20px" }}>
          <a href="/shop" style={{ marginRight: 20 }}>Productos</a>
          <a href="/shop/cart">Carrito</a>
        </nav>

        {children}
      </body>
    </html>
  );
}