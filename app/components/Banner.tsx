"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Banner() {
  const slides = ["/image/banner/img.jpg", "/image/banner/image2.jpg", "/image/banner/images3.jpg"];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto slide every 5 seconds
  useEffect(() => { 
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* === SLIDER BACKGROUND === */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slides[current]}
            custom={direction}
            initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -200 : 200, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current]}
              alt={`Car Slide ${current + 1}`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* === SEARCH CARD === */}
      <div className="absolute right-6 md:right-20 top-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-xl p-6 md:p-8 w-[90%] max-w-sm space-y-4 z-10">
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

      {/* === NAVIGATION ARROWS === */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-800 rounded-full p-2 shadow-md z-10 transition"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-gray-800 rounded-full p-2 shadow-md z-10 transition"
      >
        <FaChevronRight size={20} />
      </button>

      {/* === DOT INDICATORS === */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? "bg-blue-600 scale-110" : "bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
