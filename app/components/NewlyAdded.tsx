"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export default function NewlyAdded() {
  const [wishlist, setWishlist] = useState<{ [key: number]: boolean }>({});

  const toggleWish = (id: number) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const cars = [
    {
      id: 1,
      title: "BMW M4 LXI",
      km: "40000 Km",
      fuel: "Diesel",
      type: "Manual",
      state: "UP 16",
      price: "₹ 5.90 Lakh",
      emi: "₹ 8,798 /month*",
      location: "Noida Sector 63, B Block",
      seller: "Dealer",
      shortlistCount: 100,
      image: "/image/listcard/listingimg.jpg",
    },
    {
      id: 2,
      title: "BMW M4 LXI",
      km: "40000 Km",
      fuel: "Diesel",
      type: "Manual",
      state: "UP 16",
      price: "₹ 5.90 Lakh",
      emi: "₹ 8,798 /month*",
      location: "Noida Sector 63, B Block",
      seller: "Dealer",
      shortlistCount: 100,
      image: "/image/listcard/listingimg.jpg",
    },
    {
      id: 3,
      title: "BMW M4 LXI",
      km: "40000 Km",
      fuel: "Diesel",
      type: "Manual",
      state: "UP 16",
      price: "₹ 5.90 Lakh",
      emi: "₹ 8,798 /month*",
      location: "Noida Sector 63, B Block",
      seller: "Dealer",
      shortlistCount: 100,
      image: "/image/listcard/listingimg.jpg",
    },
    {
      id: 4,
      title: "BMW M4 LXI",
      km: "40000 Km",
      fuel: "Diesel",
      type: "Manual",
      state: "UP 16",
      price: "₹ 5.90 Lakh",
      emi: "₹ 8,798 /month*",
      location: "Noida Sector 63, B Block",
      seller: "Dealer",
      shortlistCount: 100,
      image: "/image/listcard/listingimg.jpg",
    },
  ];

  return (
    <div className="px-6 mt-10">
      <h2 className="text-3xl font-semibold mb-6">Newly Added</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="border rounded-xl shadow-sm p-3 bg-white transition hover:shadow-lg"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={car.image}
                className="rounded-xl w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />

              {/* Heart */}
              <button
                onClick={() => toggleWish(car.id)}
                className="absolute top-3 right-3 bg-white p-1 rounded-full shadow"
              >
                <Heart
                  size={20}
                  className={
                    wishlist[car.id]
                      ? "fill-red-500 text-red-500"
                      : "text-black"
                  }
                />
              </button>
            </div>

            <div className="mt-3">
              <h3 className="text-lg font-semibold">{car.title}</h3>

              <div className="flex gap-2 text-xs mt-1 text-gray-600">
                <span>{car.km}</span>
                <span>{car.fuel}</span>
                <span>{car.type}</span>
                <span>{car.state}</span>
              </div>

              <p className="font-bold mt-2">{car.price}</p>
              <p className="text-sm text-gray-600">{car.emi}</p>

              <p className="text-sm mt-2 flex items-center gap-1 text-gray-700">
                📍 {car.location}
              </p>

              <p className="text-xs text-gray-500">{car.seller}</p>

              <div className="flex gap-2 mt-4">
                <button className="flex-1 border rounded-full py-2 text-sm">
                  View Dealer
                </button>
                <button className="flex-1 bg-green-600 text-white rounded-full py-2 text-sm">
                  Chat Dealer
                </button>
              </div>

              <p className="text-xs mt-2 text-gray-600">
                ❤️ {car.shortlistCount} Shortlisted This
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
