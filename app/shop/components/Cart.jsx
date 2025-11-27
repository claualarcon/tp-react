export default function Cart({ cart }) {
  return (
    <div>
      <h3>Carrito</h3>

      {cart.length === 0 && <p>No hay productos.</p>}

      {cart.map((item, index) => (
        <div key={index} style={{ marginBottom: 10 }}>
          {item.title} – ${item.price}
        </div>
      ))}

      {cart.length > 0 && (
        <p style={{ marginTop: 15 }}>
          <strong>Total a pagar:</strong> $
          {cart.reduce((acc, item) => acc + item.price, 0)}
        </p>
      )}
    </div>
  );
}
