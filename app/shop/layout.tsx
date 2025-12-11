import Link from "next/link";
import { ReactNode } from "react";
import { CartProvider } from "../context/CartContext";

interface ShopLayoutProps {
    children: ReactNode;
}

export default function ShopLayout({ children }: ShopLayoutProps) {
    return (<>
        <nav className="flex gap-4">
            <h1>🛍 Carrito React / Next.js</h1>
            <Link href="/shop">Productos </Link>
            <Link href="/shop/cart">Carrito </Link>
        </nav>
        <CartProvider>
            {children}
        </CartProvider>
    </>
    );
}
