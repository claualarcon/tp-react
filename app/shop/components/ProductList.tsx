"use client";

import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { Product } from "../interfaces/Products";

export default function ProductList() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
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
      <h2 className="text-2xl font-bold">Productos Disponibles</h2>

      <div className="flex flex-wrap gap-4">
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

