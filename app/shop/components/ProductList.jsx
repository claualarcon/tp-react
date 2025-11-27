import ProductCard from "./ProductCard";
import { DB } from "../data/db";

export default function ProductList({ onAddToCart }) {
  const products = DB.products;

  return (
    <div>
      <h2>Productos Disponibles</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
