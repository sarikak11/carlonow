"use client";

import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import { HiLocationMarker } from "react-icons/hi";
import "../../style/newadded.css";

export default function NewlyAdded() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const cars = [
    { id: 1, img: "/image/listcard/listingimg.jpg" },
    { id: 2, img: "/image/listcard/car1.png" },
    { id: 3, img: "/image/listcard/car3.png" },
    { id: 4, img: "/image/listcard/car2.png" },
    { id: 5, img: "/image/listcard/car4.png" },
    { id: 6, img: "/image/listcard/car3.png" },
  ];

  return (
    <section className="newadded-wrapper">

      <h2 className="newadded-section-title">Newly Added</h2>

      {/* REAL NAVIGATION BUTTONS */}
      <div className="newadded-prev">❮</div>
      <div className="newadded-next">❯</div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".newadded-next",
          prevEl: ".newadded-prev",
        }}
        loop={true}
        speed={650}
        spaceBetween={20}
        slidesPerView={1.1}
        centeredSlides={false}
        resistance={true}
        resistanceRatio={0.75}
        grabCursor={true}

        breakpoints={{
         480: { slidesPerView: 1.4 },
          640: { slidesPerView: 2.1 },
          768: { slidesPerView: 2.4 },
          1024: { slidesPerView: 3.1 },
          1280: { slidesPerView: 4 },
        }}
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="newadded-card">

              {/* Image Section */}
              <div className="newadded-img-box">
                <img src={car.img} alt="car" className="newadded-img" />

                <div
                  onClick={() => toggleWishlist(car.id)}
                  className="heart-btn"
                >
                  {wishlist.includes(car.id) ? (
                    <AiFillHeart className="heart-active" />
                  ) : (
                    <AiOutlineHeart className="heart-default" />
                  )}
                </div>

                <div className="sellers-badge">Seller</div>
              </div>

              {/* Content */}
              <div className="newadded-content">

                <h2 className="newadded-title-card">BMW M4 LXI</h2>

                <div className="newadded-tags">
                  <span>22.59k km</span>
                  <span>Petrol</span>
                  <span>Manual</span>
                  <span>DL-1C</span>
                </div>

                <p className="newadded-price">₹ 5.90 Lakh</p>

                <div className="newadded-location">
                  <HiLocationMarker className="location-icon" />
                  <span>Noida Sector 63</span>
                </div>

                <button className="newadded-btn">Contact Seller</button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
