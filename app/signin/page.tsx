"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
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
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden md:flex md:w-1/2 bg-blue-100 items-center justify-center">
          <Image
            src="/assets/signin.webp"
            alt="Login"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Log in to Exclusive</h2>
          <p className="text-gray-600 mb-6">Enter your details below</p>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600"
            >
              Log In
            </button>
          </form>

          <div className="flex justify-between items-center mt-4 text-sm">
            <a href="#" className="text-red-500 font-semibold">Forgot Password?</a>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-4 text-sm">
            <p>
              Don't have an account?{" "}
              <Link href="../signup" className="text-red-500 font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
