import Cart from "../components/Cart";

export default function CartPage() {
  return (
    <section style={{ maxWidth: 720 }}>
      <header style={{ marginBottom: 24 }}>
        <h2>Mi carrito</h2>
        <p>Revisá los productos antes de continuar.</p>
      </header>

      <div
        style={{
          border: "1px solid var(--border)",
          borderRadius: 8,
          padding: 16,
        }}
      >
        <Cart />
      </div>
    </section>
  );
}
