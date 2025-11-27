export default function ProductCard({ product, onAddToCart }) {
  return (
    <div
      style={{
        width: 250,
        padding: 15,
        border: "1px solid #ccc",
        borderRadius: 10,
        background: "#fafafa",
        color: "black" 
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", borderRadius: 8, marginBottom: 10 }}
      />

      <h3>{product.title}</h3>
      <p><strong>Categoría:</strong> {product.category}</p>
      <p style={{ fontSize: 14 }}>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>

      <button
        onClick={() => onAddToCart(product)}
        style={{
          marginTop: 10,
          padding: "8px 12px",
          borderRadius: 8,
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
