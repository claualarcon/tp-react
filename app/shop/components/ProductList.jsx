"use client";

import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

export default function ProductList() {

  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error al cargar productos:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Productos Disponibles</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>
    </div>
  );
}
