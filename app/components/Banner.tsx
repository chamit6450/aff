export default function Banner() {
    return (
      <div className="relative w-full bg-gray-900 p-8 rounded-lg flex items-center justify-between shadow-lg overflow-hidden">
        <div className="text-white">
          <h2 className="text-4xl font-extrabold leading-tight">Up to 10% Off Voucher</h2>
          <p className="text-lg text-gray-300 mt-2">iPhone 16 Series</p>
          <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
            Shop Now →
          </button>
        </div>
        <div className="relative w-1/2 max-w-xs">
          <img
            src="/assets/bg.webp"
            alt="iPhone 16"
            className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
        </div>
      </div>
    );
  }