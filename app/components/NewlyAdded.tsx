"use client";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import { HiLocationMarker } from "react-icons/hi";
import "./listing.css";

export default function NewlyAdded() {

  // ✅ Wishlist state
  const [wishlist, setWishlist] = useState<number[]>([]);

  // ✅ Toggle function
  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id) // remove
        : [...prev, id] // add
    );
  };

  // Cars data:
  const cars = [
    { id: 1, img: "/image/listcard/listingimg.jpg" },
    { id: 2, img: "/image/listcard/car1.png" },
    { id: 3, img: "/image/listcard/car3.png" },
    { id: 4, img: "/image/listcard/car2.png" },
    { id: 5, img: "/image/listcard/car4.png" },
    { id: 6, img: "/image/listcard/car3.png" },
  ];

  return (
    <section className="w-full px-6 mt-10 relative">

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Newly Added
      </h2>

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
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop={true}
        centeredSlides={false}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 14 },
          768: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 3, spaceBetween: 18 },
          1280: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >

        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="bg-white shadow-md hover:shadow-lg transition rounded-[22px] overflow-hidden list-car-card mx-auto">

              {/* IMAGE + HEART + SELLER */}
              <div className="relative w-[304px] h-[200px] overflow-hidden rounded-t-[22px]">

                <img
                  src={car.img}
                  alt="car"
                  className="list-car-img"
                />

                {/* Heart Toggle */}
                <div
                  onClick={() => toggleWishlist(car.id)}
                  className="absolute top-4 right-4 cursor-pointer z-20"
                >
                  {wishlist.includes(car.id) ? (
                    <AiFillHeart className="text-red-600 text-2xl" />
                  ) : (
                    <AiOutlineHeart className="text-black text-2xl" />
                  )}
                </div>

                {/* Seller Badge */}
                <div className="absolute -bottom-1 left-0 bg-white text-blue-900 text-sm font-semibold px-5 py-1.5 rounded-tr-2xl shadow-sm">
                  Seller
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-2">
                <h2 className="font-semibold text-[18px] text-[#000]">
                  BMW M4 LXI
                </h2>

                <div className="flex flex-wrap gap-2 mb-2 text-[10px]">
                  <span className="px-2 py-1 bg-gray-100 rounded-md">22.59k km</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-md">Petrol</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-md">Manual</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-md">DL-1C</span>
                </div>

                <p className="text-lg font-bold mb-1">₹ 5.90 Lakh</p>

                <div className="flex items-center gap-1 text-xs text-black mb-3">
                  <HiLocationMarker className="text-black text-lg" />
                  <span>Noida Sector 63</span>
                </div>

                <button className="w-full bg-blue-800 text-white text-sm font-semibold py-2 rounded-lg shadow-sm">
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
