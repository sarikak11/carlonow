"use client";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

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
    <section className="w-full px-6 mt-10 relative">

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

      {/* LEFT ARROW */}
      <div
        className="swiper-button-prev-custom absolute left-0 top-[55%] z-10 bg-white shadow-lg rounded-full p-3 cursor-pointer"
      >
        ❮
      </div>

      {/* RIGHT ARROW */}
      <div
        className="swiper-button-next-custom absolute right-0 top-[55%] z-10 bg-white shadow-lg rounded-full p-3 cursor-pointer"
      >
        ❯
      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((id) => (
<SwiperSlide key={id}>
  <div className="rounded-2xl bg-white shadow-md hover:shadow-lg transition overflow-hidden">

    {/* IMAGE + HEART + SELLER */}
    <div className="relative ">

      {/* Car Image */}
      <img
        src="/image/listcard/listingimg.jpg"
        alt="car"
        className="w-full h-48 object-cover"
      />

      {/* Gradient Overlay (bottom fade) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>

      {/* Heart Button */}
      <div
        onClick={() => toggleWishlist(id)}
        className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow cursor-pointer"
      >
        {wishlist.includes(id) ? (
          <AiFillHeart className="text-red-500 text-xl" />
        ) : (
          <AiOutlineHeart className="text-black text-xl" />
        )}
      </div>

      {/* SELLER TAG (inside image bottom left) */}
     <div className="absolute bottom-0 left-0 translate-y-1/2 bg-white px-4 py-1 
rounded-t-xl shadow text-blue-600 text-sm font-medium z-20">
  Seller
</div>
    </div>

    {/* CONTENT */}
    <div className="p-4 pt-6">

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">BMW M4 LXI</h3>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3 text-xs">
        <span className="px-2 py-1 bg-gray-100 rounded-md">22.59k km</span>
        <span className="px-2 py-1 bg-gray-100 rounded-md">Petrol</span>
        <span className="px-2 py-1 bg-gray-100 rounded-md">Manual</span>
        <span className="px-2 py-1 bg-gray-100 rounded-md">DL-1C</span>
      </div>

      {/* PRICE */}
      <p className="text-xl font-bold mb-1">₹ 5.90 Lakh</p>

      {/* LOCATION */}
      <p className="text-sm text-gray-600 flex items-center gap-1 mb-4">
        📍 Noida Sector 63
      </p>

      {/* BUTTON */}
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
        Contact Seller
      </button>
    </div>
  </div>
</SwiperSlide>


        ))}
      </Swiper>
    </section>
  );
}
