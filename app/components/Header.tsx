"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in (Token exists in localStorage)
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/signin"); 
  };

  const scrollToWishlist = () => {
    const wishlistSection = document.getElementById("wishlist-section");
    if (wishlistSection) {
      wishlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Xclusive</h1>
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-black">Home</a>
        <button className="hover:text-black" onClick={scrollToWishlist}>
          Wishlist
        </button>
        <button className="hover:text-black" onClick={scrollToBottom}>
          Contact
        </button>

        {/* Conditionally show Sign Up or Logout */}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="hover:text-black">
            Logout
          </button>
        ) : (
          <Link href="/signup" className="hover:text-black">
            Sign Up
          </Link>
        )}
      </nav>
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 text-gray-600" />
        <ShoppingCart className="w-5 h-5 text-gray-600" />
        <User className="w-5 h-5 text-gray-600" />
        <Menu className="w-5 h-5 text-gray-600 md:hidden" />
      </div>
    </header>
  );
}
