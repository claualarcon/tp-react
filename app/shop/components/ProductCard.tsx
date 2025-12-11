"use client";

import { Product } from "../interfaces/Products";
import { useCart } from "@/app/hooks/useCart";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
    return (
      <div
      className="product-card"
    >
      <Image
        src={product.image }
        alt={product.title}
        className="image-container"
        width={200}
        height={200}
      />

      <h3 className="product-title">{product.title}</h3>
      <p className="product-category"><strong>Categoría:</strong> {product.category}</p>
      <p className="product-description">{product.description}</p>
      <p className="product-price"><strong>Precio:</strong> ${product.price}</p>
      <p className="product-stock"><strong>Stock:</strong> {product.rating.count} unidades</p>

      <button
        onClick={() => addToCart(product)}
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

