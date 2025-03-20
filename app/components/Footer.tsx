"use client";

import { Mail, Facebook, Twitter, Instagram, Linkedin, Truck, Headphones, ShieldCheck } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <>
        <section className="flex flex-col md:flex-row justify-center items-center gap-10 py-40 px-6 md:px-20">
       {/* Service 1 */}
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200">
          <Truck className="w-8 h-8 text-black" />
        </div>
        <h3 className="font-semibold text-lg">FREE AND FAST DELIVERY</h3>
        <p className="text-gray-500 text-sm">Free delivery for all orders over $140</p>
      </div>

      {/* Service 2 */}
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200">
          <Headphones className="w-8 h-8 text-black" />
        </div>
        <h3 className="font-semibold text-lg">24/7 CUSTOMER SERVICE</h3>
        <p className="text-gray-500 text-sm">Friendly 24/7 customer support</p>
      </div>

      {/* Service 3 */}
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-200">
          <ShieldCheck className="w-8 h-8 text-black" />
        </div>
        <h3 className="font-semibold text-lg">MONEY BACK GUARANTEE</h3>
        <p className="text-gray-500 text-sm">We return money within 30 days</p>
      </div>
    </section>
    <footer className="bg-black text-white">
      

      {/* Bottom Section with Footer Links */}
      <div className="px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Subscribe */}
        <div>
          <h4 className="font-semibold text-xl mb-3">Exclusive</h4>
          <p className="text-gray-400 mb-3">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent p-2 w-full text-sm focus:outline-none"
            />
            <button className="bg-gray-800 p-2">
              <Mail className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-xl mb-3">Support</h4>
          <p className="text-gray-400 text-sm">Lovely Professional University, Punjab, IN 144411</p>
          <p className="text-gray-400 text-sm mt-2">amitchauhanreal@gmail.com</p>
          <p className="text-gray-400 text-sm mt-2">+91 98770-41961</p>
        </div>

        {/* Account */}
        <div>
          <h4 className="font-semibold text-xl mb-3">Account</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-xl mb-3">Quick Link</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App & Socials */}
        <div>
          {/* <h4 className="font-semibold text-xl mb-3">Download App</h4> */}
          <p className="text-gray-400 text-sm mb-2">Save Rs 150 With App New User Only</p>
          
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <Twitter className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <Instagram className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <Linkedin className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 border-t border-gray-600 text-gray-400 text-sm">
        © Copyright Amit Chauhan 2025. All rights reserved
      </div>
    </footer>
    </>
  );
};

export default Footer;
