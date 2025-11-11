"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      {/* Background Image */}
      <Image
        src="/img.jpg"
        alt="Car Banner"
        fill
        className="object-cover"
        priority
        loading = "eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Search Card */}
      <div className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-xl p-6 md:p-8 w-[90%] max-w-sm space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
          Search Best Dealer
        </h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
            By Dealers
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 text-sm font-medium hover:bg-gray-200 transition">
            By Cars
          </button>
        </div>

        {/* Dropdowns */}
        <div className="space-y-3">
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Location</option>
            <option>Noida</option>
            <option>Delhi</option>
            <option>Gurgaon</option>
          </select>

          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>By Cars</option>
            <option>BMW</option>
            <option>Audi</option>
            <option>Hyundai</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="w-full bg-blue-600 text-white rounded-lg py-2 text-base font-semibold hover:bg-blue-700 transition">
          Search
        </button>
      </div>
    </section>
  );
}
