"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image Section */}
      <div className="hidden md:flex w-1/2 justify-center items-center bg-gray-100">
        <Image
          src="/assets/signup.webp"
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

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Input Fields */}
          <form onSubmit={handleSignup} className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-200"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-200"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-red-200"
              required
            />

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
            >
              Create Account
            </button>

            {/* Google Signup */}
            <button className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100 transition">
              <FcGoogle className="mr-2 text-xl" />
              Sign up with Google
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-600">
              Already have an account? <a href="/signin" className="text-red-500">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
