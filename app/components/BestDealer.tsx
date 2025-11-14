"use client";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function BestDealer() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    wishlist.includes(id)
      ? setWishlist(wishlist.filter((w) => w !== id))
      : setWishlist([...wishlist, id]);
  };

  return (
    <section className="w-full px-6 mt-16">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Best Dealer For Your Near Location
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((id) => (
          <div
            key={id}
            className="border rounded-xl shadow-sm hover:shadow-md transition p-3 bg-white group"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src="/image/banner/image2.jpg"
                className="w-full h-44 object-cover rounded-lg transform transition duration-300 group-hover:scale-105"
                alt="car"
              />

              {/* Wishlist heart */}
              <div
                className="absolute top-2 right-2 bg-white shadow rounded-full p-1 cursor-pointer"
                onClick={() => toggleWishlist(id)}
              >
                {wishlist.includes(id) ? (
                  <AiFillHeart className="text-red-500 text-xl" />
                ) : (
                  <AiOutlineHeart className="text-black text-xl" />
                )}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mt-2">BMW M4 LXI</h3>

            {/* Specification Row */}
            <div className="flex flex-wrap gap-3 text-[12px] text-gray-600 mt-1">
              <span>40000 km</span>
              <span>Manual</span>
              <span>Diesel</span>
              <span>UP 16</span>
            </div>

            {/* Price */}
            <p className="text-xl font-bold mt-1">₹ 5.90 Lakh</p>

            {/* EMI Price */}
            <p className="text-sm text-gray-600 -mt-1">₹8,798 /month*</p>

            {/* Location */}
            <p className="text-sm text-gray-700 mt-1">
              📍 Noida Sector 63, B Block
            </p>

            {/* Buttons */}
            <div className="flex w-full gap-2 mt-3">
              <button className="flex-1 bg-blue-600 text-white text-sm py-2 rounded-md hover:bg-blue-700">
                View Dealer
              </button>

              <button className="flex-1 bg-green-600 text-white text-sm py-2 rounded-md hover:bg-green-700">
                Chat Dealer
              </button>
            </div>

            {/* Shortlisted */}
            <p className="text-[12px] text-gray-500 mt-2 flex items-center gap-1">
              ❤️ 100 Shortlisted This
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
