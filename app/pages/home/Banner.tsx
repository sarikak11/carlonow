"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../style/banner.css";

export default function Banner() {
  const slides = [
    "/image/banner/img.jpg",
    "/image/banner/image2.jpg",
    "/image/banner/images3.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

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
    <section className="banner-container">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slides[current]}
            custom={direction}
            initial={{ x: direction > 0 ? 200 : -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -200 : 200, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="banner-slide"
          >
            <Image
              src={slides[current]}
              alt={`Car Slide ${current + 1}`}
              fill
              className="banner-image"
              priority
            />
            <div className="banner-overlay" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Search Card */}
      <div className="search-card">
        <h2 className="search-title">Search Best Dealer</h2>

        <div className="toggle-btns">
          <button className="btn-primary">By Dealers</button>
          <button className="btn-secondary">By Cars</button>
        </div>

        <div>
          <select className="dropdown">
            <option>Location</option>
            <option>Noida</option>
            <option>Delhi</option>
            <option>Gurgaon</option>
          </select>

          <select className="dropdown">
            <option>By Cars</option>
            <option>BMW</option>
            <option>Audi</option>
            <option>Hyundai</option>
          </select>
        </div>

        <button className="search-btn">Search</button>
      </div>

      {/* Navigation Arrows */}
      <button className="nav-arrow nav-left" onClick={prevSlide}>
        <FaChevronLeft size={20} />
      </button>

      <button className="nav-arrow nav-right" onClick={nextSlide}>
        <FaChevronRight size={20} />
      </button>

      {/* Dot Indicators */}
      <div className="dot-container">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${current === i ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}
