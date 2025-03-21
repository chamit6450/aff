'use client';

import Image from 'next/image';

const LoginPage = () => {
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
          
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600">
              Log In
            </button>
          </form>
          
          <div className="flex justify-between items-center mt-4 text-sm">
            <span></span>
            <a href="#" className="text-red-500 font-semibold">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
