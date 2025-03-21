import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Xclusive</h1>
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">Contact</a>
        <a href="#" className="hover:text-black">About</a>
        <Link href="/signup" className="hover:text-black">
          Sign Up
        </Link>
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
