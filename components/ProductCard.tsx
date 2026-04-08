"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye, Check } from "lucide-react";
import { Product } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group relative bg-white overflow-hidden transition-all duration-500 hover:shadow-xl rounded-xl border border-zinc-100">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <button 
            onClick={handleAddToCart}
            className={`p-3 rounded-full transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-lg ${
              isAdded ? "bg-emerald-600 text-white" : "bg-white text-brand-primary hover:bg-brand-accent hover:text-white"
            }`}
          >
            {isAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
          </button>
          <Link 
            href={`/shop/${product.id}`}
            className="bg-white text-brand-primary p-3 rounded-full hover:bg-brand-accent hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75 shadow-lg"
          >
            <Eye size={20} />
          </Link>
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium mb-1 block">
          {product.category}
        </span>
        <h3 className="text-lg font-serif font-bold text-brand-primary mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-brand-accent font-bold text-lg">
          {product.price.toLocaleString()} сом
        </p>
      </div>
    </div>
  );
}
