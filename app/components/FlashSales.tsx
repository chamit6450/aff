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

// Timer type
interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    image: "/assets/zip-hoddie.avif",
    name: "Zip Hoddie",
    price: "Rs.800",
    oldPrice: "Rs.1000",
    rating: 4.5,
    reviews: 120,
    discount: "-20%",
  },
  {
    id: 2,
    image: "/assets/oversized.avif",
    name: "Oversized Tshirt",
    price: "Rs.600",
    oldPrice: "Rs.800",
    rating: 4.2,
    reviews: 95,
    discount: "-25%",
  },
  {
    id: 3,
    image: "/assets/textured.avif",
    name: "Textured Tshirt",
    price: "Rs.2500",
    oldPrice: "Rs.3200",
    rating: 4.8,
    reviews: 200,
    discount: "-20%",
  },
  {
    id: 4,
    image: "/assets/printed.avif",
    name: "Printed Tshirt",
    price: "Rs.1500",
    oldPrice: "Rs.2000",
    rating: 4.3,
    reviews: 85,
    discount: "-30%",
  },
];

const FlashSales: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 3,
    minutes: 23,
    seconds: 19,
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const productsPerPage = 4;

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Carousel navigation
  const handleNext = () => {
    if (currentIndex + productsPerPage < products.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-5 h-10 bg-gray-800 rounded-sm"></div> {/* Changed Red to Black */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">🔥 Flash Sales</h2>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <div className="flex space-x-2 text-lg font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-lg">
            {(["hours", "minutes", "seconds"] as (keyof TimeLeft)[]).map((unit, index) => (
              <span key={unit} className="flex items-center">
                <span className="bg-white px-3 py-1 rounded shadow-sm">
                  {String(timeLeft[unit]).padStart(2, "0")}
                </span>
                {index < 2 && <span className="text-gray-800">:</span>}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Product Grid Layout */}
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
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
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                      }`}
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

      {/* Carousel Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + productsPerPage >= products.length}
          className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
