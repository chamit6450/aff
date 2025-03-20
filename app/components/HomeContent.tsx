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
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6">
      {/* Flash Sales Section */}
      <div className="mb-6 sm:mb-12">
        <FlashSales wishlist={wishlist} setWishlist={setWishlist} />
      </div>

      {/* Products Section */}
      <div className="mb-6 sm:mb-12">
        <Products wishlist={wishlist} setWishlist={setWishlist} />
      </div>

      {/* Wishlist Section */}
      <div className="mb-6 sm:mb-12">
        <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
      </div>
    </div>
  );
};

export default HomeContent;
