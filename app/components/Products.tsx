"use client";

import { useState } from "react";
import { Heart, X } from "lucide-react";

// Define Product type
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

// Define props for Products
interface ProductsProps {
  wishlist: Product[];
  setWishlist: React.Dispatch<React.SetStateAction<Product[]>>;
}

// Sample products
const products: Product[] = [
  {
    id: 5,
    image: "/assets/zip-hoddie.avif",
    name: "Zip Hoodie",
    price: "Rs.800",
    oldPrice: "Rs.1000",
    rating: 4.5,
    reviews: 120,
    discount: "-20%",
  },
  {
    id: 6,
    image: "/assets/oversized.avif",
    name: "Oversized T-shirt",
    price: "Rs.600",
    oldPrice: "Rs.800",
    rating: 4.2,
    reviews: 95,
    discount: "-25%",
  },
  {
    id: 7,
    image: "/assets/textured.avif",
    name: "Textured T-shirt",
    price: "Rs.2500",
    oldPrice: "Rs.3200",
    rating: 4.8,
    reviews: 200,
    discount: "-20%",
  },
  {
    id: 8,
    image: "/assets/printed.avif",
    name: "Printed T-shirt",
    price: "Rs.1500",
    oldPrice: "Rs.2000",
    rating: 4.3,
    reviews: 85,
    discount: "-30%",
  },
];

const Products: React.FC<ProductsProps> = ({ wishlist, setWishlist }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [alert, setAlert] = useState<string | null>(null);

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const isInWishlist = prev.find((item) => item.id === product.id);
      if (!isInWishlist) {
        setAlert("Added to Wishlist!");
        setTimeout(() => setAlert(null), 2000);
      }
      return isInWishlist ? prev.filter((item) => item.id !== product.id) : [...prev, product];
    });
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 relative">
      {alert && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg transition-opacity">
          {alert}
        </div>
      )}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">Our Products</h2>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(product);
              }}
              className="absolute top-3 right-3 p-1 bg-white rounded-full shadow-md cursor-default"
>
              <Heart
                className={`w-6 h-6 ${wishlist.find((item) => item.id === product.id) ? "text-red-500" : "text-gray-400"}`}
                fill={wishlist.find((item) => item.id === product.id) ? "#ef4444" : "none"}
              />
            </button>
            <img src={product.image} alt={product.name} className="w-full h-[380px] object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-base font-semibold text-gray-800 truncate">{product.name}</h3>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-lg font-bold text-gray-800">{product.price}</span>
                <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;