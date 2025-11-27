"use client";

import "../style/style.css";
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
    <header className="header-container">
      <div className="header-wrapper">

        {/* LEFT SECTION */}
        <div className="header-left">
          <h1 className="logo">CARLONOW</h1>

          <div className="nav-links">
            {/* Used Cars */}
            <div
              className="dropdown-wrapper"
              onMouseEnter={() => window.innerWidth > 1024 && setShowUsedCars(true)}
              onMouseLeave={() => window.innerWidth > 1024 && setShowUsedCars(false)}
            >
              <button
                className="dropdown-btn"
                onClick={() => {
                  if (window.innerWidth <= 1024) {
                    setShowUsedCars(!showUsedCars);
                    setShowDealer(false);
                  }
                }}
              >
                <span>Used Cars</span>
                <FaChevronDown className="dropdown-icon" />
              </button>

              <AnimatePresence>
                {showUsedCars && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mega-dropdown"
                  >
                    {/* LEFT PANEL */}
                    <div className="mega-left">
                      <div className="mega-left-title">
                        <h3>Buy Used Cars in {location}</h3>
                        <span className="change-city">Change city</span>
                      </div>

                      <ul className="mega-category-list">
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
                            className={`mega-category-item ${activeCategory === item ? "active" : ""}`}
                            onClick={() => setActiveCategory(item)}
                          >
                            <span>{item}</span>
                            <FaChevronRight />
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="mega-right">
                      <h3>{activeCategory}</h3>
                      <div className="mega-links-grid">
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
                          <div className="mega-grid-item" key={item}>
                            <span>{item}</span>
                            <FaExternalLinkAlt size={12} />
                          </div>
                        ))}
                      </div>

                      <p className="buy-online-link">Buy cars online →</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* NEAR DEALER DROPDOWN */}
            <div
              className="dropdown-wrapper"
              onMouseEnter={() => window.innerWidth > 1024 && setShowDealer(true)}
              onMouseLeave={() => window.innerWidth > 1024 && setShowDealer(false)}
            >
              <button
                className="dropdown-btn"
                onClick={() => {
                  if (window.innerWidth <= 1024) {
                    setShowDealer(!showDealer);
                    setShowUsedCars(false);
                  }
                }}
              >
                <span>Near Dealer</span>
                <FaChevronDown className="dropdown-icon" />
              </button>

              <AnimatePresence>
                {showDealer && (
                  <motion.div
                    className="dealer-dropdown"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <ul>
                      <li>Nearby Car Dealers</li>
                      <li>View all Dealers</li>
                      <li>Dealers in Delhi</li>
                      <li>Dealers in Gurugram</li>
                      <li>Dealers in Ghaziabad</li>
                    </ul>

                    <ul>
                      <li>Dealers in Noida</li>
                      <li>Dealers in Faridabad</li>
                      <li>Dealers in Greater Noida</li>
                      <li>Dealers in Jaipur</li>
                      <li>Dealers in Lucknow</li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="search-bar">
          <input type="text" placeholder="Search Your Car" />
          <FaSearch className="search-icon" />
        </div>

        {/* RIGHT SECTION */}
        <div className="header-right">
          <div className="location-display">
            <FaMapMarkerAlt />
            <span>{location}</span>
          </div>

          <button className="login-btn">Login</button>

          {/* MOBILE MENU BUTTON */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="mobile-menu">
            <div className="mobile-menu-top">
              <h2>Menu</h2>
              <button onClick={() => setMobileMenuOpen(false)}>
                <FaTimes />
              </button>
            </div>

            <div className="mobile-location">
              <FaMapMarkerAlt />
              <span>{location}</span>
            </div>

            <div className="mobile-links">
              <button>Used Cars</button>
              <button>Near Dealer</button>
            </div>

            <button className="mobile-login">Login</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
