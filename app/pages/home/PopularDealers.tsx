// app/components/PopularDealers.tsx
"use client";

import Image from "next/image";
import { FaMapMarkerAlt, FaStar, FaClock, FaCar, FaCarAlt, FaClipboard } from "react-icons/fa";

type Dealer = {
  id: number;
  name: string;
  address: string;
  years: string;
  carsSold: string;
  carsAvailable: string;
  reviews: string;
  rating: number;
  image: string; // public path, e.g. /image/listcard/listingimg.jpg
};

const dealers: Dealer[] = [
  {
    id: 1,
    name: "CAR WALE",
    address: "Noida Sector 63, B Block",
    years: "10 Years",
    carsSold: "120+ Cars Sold",
    carsAvailable: "31+ Cars Available",
    reviews: "49 Reviews Post",
    rating: 4.8,
    image: "/image/listcard/image4.png",
  },
  {
    id: 2,
    name: "CAR WALE",
    address: "Noida Sector 63, B Block",
    years: "10 Years",
    carsSold: "120+ Cars Sold",
    carsAvailable: "31+ Cars Available",
    reviews: "49 Reviews Post",
    rating: 4.8,
    image: "/image/listcard/image4.png",
  },
  {
    id: 3,
    name: "CAR WALE",
    address: "Noida Sector 63, B Block",
    years: "10 Years",
    carsSold: "120+ Cars Sold",
    carsAvailable: "31+ Cars Available",
    reviews: "49 Reviews Post",
    rating: 4.8,
    image: "/image/listcard/image4.png",
  },
  {
    id: 4,
    name: "CAR WALE",
    address: "Noida Sector 63, B Block",
    years: "10 Years",
    carsSold: "120+ Cars Sold",
    carsAvailable: "31+ Cars Available",
    reviews: "49 Reviews Post",
    rating: 4.8,
    image: "/image/listcard/image4.png",
  },
];

export default function PopularDealers() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Explore Popular Dealers In Your City</h2>

      {/* background container like the design (light gray rounded) */}
      <div className="bg-gray-100 rounded-xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealers.map((d) => (
            <article key={d.id} className="bg-white rounded-lg overflow-hidden border shadow-sm">
              <div className="relative h-36 sm:h-36 w-full">
                {/* use next/image for better optimization; alt text included */}
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{d.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <span className="text-blue-600 font-medium">{d.rating}</span>
                    <FaStar className="text-yellow-400" />
                  </div>
                </div>

                <ul className="mt-3 text-sm text-gray-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-gray-600" />
                    <span className="text-sm">{d.address}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaClock className="text-gray-600" />
                    <span className="text-sm">{d.years}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCar className="text-gray-600" />
                    <span className="text-sm">{d.carsSold}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCarAlt className="text-gray-600" />
                    <span className="text-sm">{d.carsAvailable}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaClipboard className="text-gray-600" />
                    <span className="text-sm">{d.reviews} <span className="text-blue-600 ml-1">View Reviews</span></span>
                  </li>
                </ul>

                <div className="mt-4 flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white rounded-full py-2 text-sm hover:bg-blue-700 transition">
                    View More
                  </button>
                  <button className="bg-green-600 text-white rounded-full py-2 px-4 text-sm hover:bg-green-700 transition">
                    Chat Dealer
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
