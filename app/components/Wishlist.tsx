"use client";

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  oldPrice: string;
  rating: number;
  reviews: number;
  discount: string;
}

interface WishlistProps {
  wishlist: Product[];
  setWishlist: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Wishlist: React.FC<WishlistProps> = ({ wishlist, setWishlist }) => {
  return (
    <div id="wishlist-section" className="mt-8 ml-16"> 
      <h2 className="text-xl font-bold">❤️ Wishlist</h2>
      <div className="grid grid-cols-4 gap-6 mt-4">
        {wishlist.length === 0 ? (
          <p className="text-gray-500">No items in wishlist.</p>
        ) : (
          wishlist.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 truncate">{product.name}</h3>
                <button
                  onClick={() =>
                    setWishlist(wishlist.filter((item) => item.id !== product.id))
                  }
                  className="mt-2 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
