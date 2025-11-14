"use client";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function Listing() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filters = ["All", "Tata", "Mahindra", "Maruti"];

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((w) => w !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <section className="w-full px-6 mt-10">

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Recently Search Used Cars
      </h2>

      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-6">
        {filters.map((name) => (
          <button
            key={name}
            onClick={() => setActiveFilter(name)}
            className={`px-5 py-1.5 text-sm rounded-full border transition 
              ${activeFilter === name
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-400 hover:bg-gray-100"
              }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            className="border rounded-xl shadow-sm hover:shadow-md transition p-3 bg-white group"
          >
            <div className="relative">

              {/* Wishlist Heart */}
              <div
                className="absolute top-2 right-2 cursor-pointer bg-white rounded-full p-1 shadow"
                onClick={() => toggleWishlist(id)}
              >
                {wishlist.includes(id) ? (
                  <AiFillHeart className="text-red-500 text-xl" />
                ) : (
                  <AiOutlineHeart className="text-black text-xl" />
                )}
              </div>

              {/* Car Image with Hover Zoom */}
              <img
                src="/image/listcard/listingimg.jpg"
                className="w-full h-44 object-cover rounded-lg transform transition duration-300 group-hover:scale-105"
                alt="car"
              />
            </div>

            {/* Seller Label */}
            <p className="text-xs text-blue-600 mt-2 font-semibold">Seller</p>

            {/* Title */}
            <h3 className="text-lg font-semibold">BMW M4 LXI</h3>

            {/* Tags */}
            <div className="flex gap-2 text-[11px] mt-1 text-gray-600">
              <span className="px-2 py-0.5 bg-gray-200 rounded">22.59k km</span>
              <span className="px-2 py-0.5 bg-gray-200 rounded">Petrol</span>
              <span className="px-2 py-0.5 bg-gray-200 rounded">Manual</span>
              <span className="px-2 py-0.5 bg-gray-200 rounded">DL-1C</span>
            </div>

            {/* Price */}
            <p className="text-xl font-bold mt-2">₹ 5.90 Lakh</p>

            {/* Location */}
            <p className="text-sm text-gray-600 flex items-center mt-1">
              📍 Noida Sector 63
            </p>

            {/* Button */}
            <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">
              Contact Seller
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}
