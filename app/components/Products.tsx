"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

// Sample product data
const products: Product[] = [
  {
    id: 1,
    image: "/assets/zip-hoddie.avif",
    name: "Zip Hoodie",
    price: "Rs.800",
    oldPrice: "Rs.1000",
    rating: 4.5,
    reviews: 120,
    discount: "-20%",
  },
  {
    id: 2,
    image: "/assets/oversized.avif",
    name: "Oversized T-shirt",
    price: "Rs.600",
    oldPrice: "Rs.800",
    rating: 4.2,
    reviews: 95,
    discount: "-25%",
  },
  {
    id: 3,
    image: "/assets/textured.avif",
    name: "Textured T-shirt",
    price: "Rs.2500",
    oldPrice: "Rs.3200",
    rating: 4.8,
    reviews: 200,
    discount: "-20%",
  },
  {
    id: 4,
    image: "/assets/printed.avif",
    name: "Printed T-shirt",
    price: "Rs.1500",
    oldPrice: "Rs.2000",
    rating: 4.3,
    reviews: 85,
    discount: "-30%",
  },
];

const Products: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-10 bg-gray-800 rounded-sm"></div> {/* Changed Red to Black */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Our Products</h2>
        </div>
      </header>

      {/* Product Grid Layout */}
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            {/* Discount Badge */}
            <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
              {product.discount}
            </div>
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[380px] object-cover rounded-t-lg"
            />
            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-800 truncate">{product.name}</h3>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-lg font-bold text-gray-800">{product.price}</span>
                <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>
              </div>
              <div className="flex items-center mt-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.314 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
