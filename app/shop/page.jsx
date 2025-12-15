"use client";

import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import ProductList from "./components/ProductList";

const BASE_URL = "https://fakestoreapi.com/products";

export default function ShopPage() {
  const [category, setCategory] = useState(null);

  const { data: categories } = useFetch(
    `${BASE_URL}/categories`
  );

  const productsUrl = category
    ? `${BASE_URL}/category/${encodeURIComponent(category)}`
    : BASE_URL;

  return (
    <section>
      <h2>Productos</h2>

      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setCategory(null)}>
          Todos
        </button>

        {categories?.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              marginLeft: 8,
              fontWeight: category === cat ? "bold" : "normal",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <ProductList url={productsUrl} />
    </section>
  );
}
