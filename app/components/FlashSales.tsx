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

// Define props for FlashSales
interface FlashSalesProps {
  wishlist: Product[];
  setWishlist: React.Dispatch<React.SetStateAction<Product[]>>;
}

// Sample products
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

const FlashSales: React.FC<FlashSalesProps> = ({ wishlist, setWishlist }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [alert, setAlert] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const isInWishlist = prev.find((item) => item.id === product.id);
      if (!isInWishlist) {
        setAlert("Added to Wishlist!");
      } else {
        setAlert("Removed from Wishlist!");
      }
      setTimeout(() => setAlert(null), 2000);
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

      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">🔥 Flash Sales</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Transparent Background with Blur Effect */}
          <div
            className="absolute inset-0 backdrop-blur-sm bg-opacity-30"
            onClick={() => setSelectedProduct(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full z-50 flex">
            {/* Close Button */}
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4">
              <X className="w-6 h-6 text-gray-500 hover:text-gray-800" />
            </button>

            {/* Product Image */}
            <div className="w-1/2 pr-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-80 object-contain rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="w-1/2 flex flex-col justify-between">
              {/* Product Info */}
              <div>
                <h2 className="text-xl font-bold text-gray-800">{selectedProduct.name}</h2>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="ml-2 text-gray-600">({selectedProduct.reviews} Reviews)</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-lg font-bold text-gray-800">{selectedProduct.price}</span>
                  <span className="text-sm text-gray-500 line-through">{selectedProduct.oldPrice}</span>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  High-quality product with durable material and modern design. Perfect for everyday use.
                </p>

                {/* Color Selection */}
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700">Colours:</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="w-6 h-6 bg-blue-500 rounded-full border-2 border-gray-300"></button>
                    <button className="w-6 h-6 bg-red-500 rounded-full border-2 border-gray-300"></button>
                    <button className="w-6 h-6 bg-black rounded-full border-2 border-gray-300"></button>
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700">Size:</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">XS</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">S</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">M</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">L</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">XL</button>
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="mt-4 flex items-center">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-1 border border-gray-300 rounded-l-md text-gray-600"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b border-gray-300 text-gray-800">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-1 border border-gray-300 rounded-r-md text-gray-600"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex items-center space-x-4">
                <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Buy Now
                </button>
                <button
                  onClick={() => toggleWishlist(selectedProduct)}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      wishlist.find((item) => item.id === selectedProduct.id)
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                    fill={
                      wishlist.find((item) => item.id === selectedProduct.id) ? "#ef4444" : "none"
                    }
                  />
                </button>
              </div>

              {/* Delivery Info */}
              <div className="mt-6 text-sm text-gray-600">
                <p className="flex items-center">
                  <span className="mr-2">🚚</span> Free Delivery
                </p>
                <p className="flex items-center mt-2">
                  <span className="mr-2">↩️</span> Free 30 Days Returns
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashSales;