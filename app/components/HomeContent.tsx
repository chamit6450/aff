"use client";

import { useState } from "react";
import FlashSales from "./FlashSales";
import Products from "./Products";
import Wishlist from "./Wishlist";

// Define the Product type for TypeScript
interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  oldPrice: string;
  rating: number;
  reviews: number;
  discount: string;
}

const HomeContent: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Flash Sales Section */}
      <FlashSales wishlist={wishlist} setWishlist={setWishlist} />

      {/* Products Section */}
      <Products wishlist={wishlist} setWishlist={setWishlist} />

      {/* Wishlist Component */}
      <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
    </div>
  );
};

export default HomeContent; // ✅ Now correctly named
