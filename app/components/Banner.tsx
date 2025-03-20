export default function Banner() {
  return (
    <div className="relative w-[892px] h-[344px] bg-gray-900 rounded-lg flex items-center shadow-lg overflow-hidden ml-16">
      {/* Text Section */}
      <div className="text-white w-1/2 z-10 relative px-8">
        <h2 className="text-4xl font-extrabold leading-tight">Summer Collection Sale</h2>
        <p className="text-lg text-gray-300 mt-2">Stay Cool with Trendy Styles</p>
        <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
          Shop Now →
        </button>
      </div>

      {/* Image Section with Fade Starting Slightly Left of Image */}
      <div className="absolute right-0 h-full w-1/2">
        <img
          src="/assets/banner1.jpg"
          alt="Summer Fashion"
          className="w-full h-full object-cover scale-120"
        />
        {/* Fade Effect Shifted Slightly Left */}
        <div className="absolute inset-y-0 left-[-10%] w-3/5 bg-gradient-to-r from-gray-900 to-transparent"></div>
      </div>
    </div>
  );
}
