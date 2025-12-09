"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../../style/banner.css";


export default function Banner() {
  const slides = [
    "/image/banner/car2.jpg",
    "/image/banner/car1.jpg",
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
      <div className="banner-wrapper">
       <AnimatePresence mode="popLayout" initial={false} custom={direction}>
  <motion.div
    key={slides[current]}
    custom={direction}
    initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
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
