"use client";

import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import { HiLocationMarker } from "react-icons/hi";
import "../../style/listing.css";

export default function Listing() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filters = ["All", "Tata", "Mahindra", "Maruti"];

  const cars = [
    { id: 1, img: "/image/listcard/listingimg.jpg", brand: "Tata" },
    { id: 2, img: "/image/listcard/car1.png", brand: "Maruti" },
    { id: 3, img: "/image/listcard/car3.png", brand: "Mahindra" },
    { id: 4, img: "/image/listcard/car2.png", brand: "Tata" },
    { id: 5, img: "/image/listcard/car4.png", brand: "Maruti" },
    { id: 6, img: "/image/listcard/car3.png", brand: "Mahindra" },
  ];

  const filteredCars =
    activeFilter === "All"
      ? cars
      : cars.filter((car) => car.brand === activeFilter);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="listing-section">
      <h2 className="listing-title">Recently Search Used Cars</h2>

      {/* Filters */}
      <div className="filter-buttons">
        {filters.map((name) => (
          <button
            key={name}
            onClick={() => setActiveFilter(name)}
            className={`filter-btn ${activeFilter === name ? "active" : ""}`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="swiper-button-custom listing-prev">❮</div>
      <div className="swiper-button-custom listing-next">❯</div>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".listing-next",
          prevEl: ".listing-prev",
        }}
        loop={true}
        speed={650} 
        spaceBetween={18}
        slidesPerView={1.15}
        centeredSlides={false}
        resistance={true}
        resistanceRatio={0.85}
        breakpoints={{
        480: { slidesPerView: 1.4 },
          640: { slidesPerView: 2.1 },
          768: { slidesPerView: 2.4 },
          1024: { slidesPerView: 3.1 },
          1280: { slidesPerView: 4 },
        }}
      >
        {filteredCars.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="list-car-card">
              <div className="car-img-box">
                <img src={car.img} alt="car" className="list-car-img" />

                <div
                  className="heart-btn"
                  onClick={() => toggleWishlist(car.id)}
                >
                  {wishlist.includes(car.id) ? (
                    <AiFillHeart className="text-red-600" size={26} />
                  ) : (
                    <AiOutlineHeart className="text-black" size={26} />
                  )}
                </div>

                <div className="seller-badge">Seller</div>
              </div>

              <div className="car-content">
                <h2 className="car-title">BMW M4 LXI</h2>

                <div className="car-tags">
                  <span className="car-tag">22.59k km</span>
                  <span className="car-tag">Petrol</span>
                  <span className="car-tag">Manual</span>
                  <span className="car-tag">DL-1C</span>
                </div>

                <p className="car-price">₹ 5.90 Lakh</p>

                <div className="car-location">
                  <HiLocationMarker className="car-location-icon" />
                  <span>Noida Sector 63</span>
                </div>

                <button className="contact-btn">Contact Seller</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
