export default function Sidebar() {
  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Health & Beauty",
  ];

  return (
    <aside className="hidden md:block w-60 bg-white p-4 border-r">
      <ul className="space-y-3 text-gray-700">
        {categories.map((category, index) => (
          <li key={index} className="hover:text-black cursor-pointer">
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}
