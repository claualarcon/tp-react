"use client";

import { useFetch } from "../../hooks/useFetch";
import ProductCard from "./ProductCard";

export default function ProductList({ url }) {
  const { data: products, loading, error } = useFetch(url);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
