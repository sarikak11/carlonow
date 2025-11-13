"use client";

import { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaChevronRight,
  FaChevronDown,
  FaExternalLinkAlt,
   FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [showUsedCars, setShowUsedCars] = useState(false);
  const [showDealer, setShowDealer] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Browse by Model");
  const [location, setLocation] = useState("Noida");

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-3 px-6 py-4">
        
        {/* ========================= LEFT SECTION ========================= */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-700">CARLONOW</h1>

          {/* Navigation Dropdowns */}
          <div className="hidden lg:flex items-center space-x-2">
            
            {/* ===================== USED CARS DROPDOWN ===================== */}
            {/* Used Cars Dropdown */}
<div
  className="relative"
  onMouseEnter={() => window.innerWidth > 1024 && setShowUsedCars(true)}
  onMouseLeave={() => window.innerWidth > 1024 && setShowUsedCars(false)}
>
  <button
    onClick={() => {
      if (window.innerWidth <= 1024) {
        setShowUsedCars(!showUsedCars);
        setShowDealer(false);
      }
    }}
    className="flex items-center space-x-1 bg-gray-50 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition text-gray-800"
  >
    <span>Used Cars</span>
    <FaChevronDown className="text-gray-600" size={14} />
  </button>


              {/* Mega Dropdown */}
              <AnimatePresence>
                {showUsedCars && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 top-[72px] w-full bg-white shadow-xl border-t border-gray-200 flex z-50"
                  >
                    {/* LEFT PANEL */}
                    <div className="w-[300px] bg-gray-50 border-r border-gray-200 p-5">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-900 text-[15px]">
                          Buy Used Cars in {location}
                        </h3>
                        <span className="text-orange-500 text-sm font-semibold cursor-pointer hover:underline">
                          Change city
                        </span>
                      </div>

                      <ul className="space-y-1 text-gray-800 text-[14px]">
                        {[
                          "Browse by Model",
                          "Browse by Make",
                          "Browse by Price",
                          "Browse by Body Type",
                          "Browse by Fuel Type",
                          "Browse by Transmission",
                          "Browse by City",
                        ].map((item) => (
                          <li
                            key={item}
                            className={`flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-white transition ${
                              activeCategory === item
                                ? "bg-white text-blue-700 font-semibold border-l-4 border-orange-500"
                                : ""
                            }`}
                            onClick={() => setActiveCategory(item)}
                          >
                            <span>{item}</span>
                            <FaChevronRight className="text-gray-500 text-xs" />
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="flex-1 p-6">
                      <h3 className="font-semibold text-gray-900 mb-3 text-[15px]">
                        {activeCategory}
                      </h3>

                      <div className="grid grid-cols-3 gap-y-2 text-[14.5px] text-gray-800">
                        {[
                          "Used Hyundai i10 Cars in Bangalore",
                          "Used Maruti Swift Cars in Bangalore",
                          "Used Hyundai i20 Cars in Bangalore",
                          "Used Maruti Celerio Cars in Bangalore",
                          "Used Renault Kwid Cars in Bangalore",
                          "Used Tata Tiago Cars in Bangalore",
                          "Used Tata NEXON Cars in Bangalore",
                          "Used Maruti Alto Cars in Bangalore",
                          "Used Maruti Baleno Cars in Bangalore",
                          "Used Hyundai Creta Cars in Bangalore",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between cursor-pointer hover:text-blue-600 transition"
                          >
                            <span>{item}</span>
                            <FaExternalLinkAlt size={12} />
                          </div>
                        ))}
                      </div>

                      <p className="text-orange-500 mt-4 text-sm font-semibold cursor-pointer hover:underline">
                        Buy cars online →
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ===================== NEAR DEALER DROPDOWN ===================== */}
            {/* Near Dealer Dropdown */}
<div
  className="relative"
  onMouseEnter={() => window.innerWidth > 1024 && setShowDealer(true)}
  onMouseLeave={() => window.innerWidth > 1024 && setShowDealer(false)}
>
  <button
    onClick={() => {
      if (window.innerWidth <= 1024) {
        setShowDealer(!showDealer);
        setShowUsedCars(false);
      }
    }}
    className="flex items-center space-x-1 bg-gray-50 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition text-gray-800"
  >
    <span>Near Dealer</span>
    <FaChevronDown className="text-gray-600" size={14} />
  </button>


              {/* Dropdown */}
              <AnimatePresence>
                {showDealer && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-3 w-[720px] bg-white shadow-lg rounded-md p-6 grid grid-cols-2 gap-x-8 z-50 border border-gray-200"
                  >
                    <ul className="space-y-2 text-sm font-medium text-gray-800">
                      <li className="hover:text-blue-600 cursor-pointer">
                        Nearby Car Dealers
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        View all Dealers
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Dealers in Delhi
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Dealers in Gurugram
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Dealers in Ghaziabad
                      </li>
                    </ul>

                    <ul className="space-y-2 text-sm font-medium text-gray-800">
                      <li className="hover:text-blue-600 cursor-pointer">
                        Dealers in Noida
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Dealers in Faridabad
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Dealers in Greater Noida
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Dealers in Jaipur
                      </li>
                      <li className="hover:text-blue-600 cursor-pointer">
                        Dealers in Lucknow
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ========================= CENTER SEARCH BAR ========================= */}
        <div className="hidden md:flex items-center w-[40%] border border-blue-600 rounded-full px-3 py-2">
          <input
            type="text"
            placeholder="Search Your Car"
            className="flex-grow outline-none text-gray-700 px-2 text-sm"
          />
          <FaSearch className="text-blue-700" />
        </div>

        {/* ========================= RIGHT SECTION ========================= */}
        <div className="flex items-center space-x-3 text-sm">
          <div className="hidden md:flex items-center space-x-1 text-blue-700">
            <FaMapMarkerAlt />
            <span className="font-medium">{location}</span>
          </div>
 {/* Login button */}
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-1.5 rounded-full font-semibold">
            Login
          </button>
{/* Hamburger Menu (Mobile Only) */}
          <button
            className="lg:hidden text-blue-700 text-2xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FaBars />
          </button>

        </div>
      </div>

            {/* ========== MOBILE MENU ========== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-50 p-6 flex flex-col space-y-5"
          >
            <div className="flex justify-between items-center mb-4">
           
            
              <h2 className="text-xl font-bold text-blue-700">Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <FaTimes className="text-gray-600 text-2xl" />
              </button>
              </div>
               {/* LOCATION SECTION BELOW MENU TITLE */}
                 <div className="flex flex-col space-y-4">
              <FaMapMarkerAlt className="text-lg"/>
              <span className="font-medium">{location}</span>
            </div>
            
{/* === Menu Items === */}
      <div className="flex flex-col space-y-4">

            <button className="text-gray-800 font-semibold text-base hover:text-blue-600">
              Used Cars
            </button>
            <button className="text-gray-800 font-semibold text-base hover:text-blue-600">
              Near Dealer
            </button>
              </div>
            <div className="border-t border-gray-200 my-5"></div>

            

            <button className="w-full bg-blue-700 text-white rounded-full py-2 mt-3 font-semibold hover:bg-blue-800">
              Login
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
