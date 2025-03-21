"use client";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image Section */}
      <div className="hidden md:flex w-1/2 justify-center items-center bg-gray-100">
        <Image
          src="/signup.webp" 
          alt="Shopping Cart with Phone"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-900">Create an account</h2>
          <p className="text-gray-600 mt-1">Enter your details below</p>

          {/* Input Fields */}
          <form className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-200"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-200"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-200"
            />

            {/* Create Account Button */}
            <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition">
              Create Account
            </button>

            {/* Google Signup */}
            <button className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100 transition">
              <FcGoogle className="mr-2 text-xl" />
              Sign up with Google
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-600">
              Already have an account? <a href="#" className="text-red-500">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
