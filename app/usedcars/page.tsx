"use client";
import Image from "next/image";
import "../style/usedcars.css";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function UsedCars() {
  const cars = [
    {
      id: 1,
      name: "2021 Maruti Suzuki Swift",
      price: "6.50 Lakh",
      km: "25,000 km",
      fuel: "Petrol", 
      transmission: "Manual",
      img:"/image/listcard/car1.png",
    },
    {
      id: 2,
      name: "2022 Tata Nexon EV",
      price: "16.80 Lakh",
      km: "15,000 km",
      fuel: "Electric",
      transmission: "Automatic",
      img: "/image/listcard/car1.png",
    },
    {
      id: 3,
      name: "2020 Hyundai Creta",
      price: "14.25 Lakh",
      km: "50,000 km",
      fuel: "Diesel",
      transmission: "Automatic",
      img: "/image/listcard/car2.png",
    },
    {
      id: 4,
      name: "2023 Mahindra Thar",
      price: "15.50 Lakh",
      km: "8,000 km",
      fuel: "Diesel",
      transmission: "Manual",
      img: "/image/listcard/car3.png",
    },
    {
      id: 5,
      name: "2019 Honda City",
      price: "9.75 Lakh",
      km: "35,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      img: "/image/listcard/car4.png",
    },
    {
      id: 6,
      name: "2022 Maruti Baleno",
      price: "8.10 Lakh",
      km: "12,000 km",
      fuel: "Petrol",
      transmission: "Manual",
      img: "/image/listcard/car2.png",
    },
  ];

  return (
    <div className="usedCarsPage">
      {/* LEFT – FILTER SIDEBAR */}
     <aside className="filter-container">
  <div className="filter-header">
    <span>Filter Results</span>
    <span className="clear-all">Clear All</span>
  </div>

  <div className="filter-section">
    <div className="filter-title">Make & Model <span className="arrow-icon">⌃</span></div>

    <div className="option-list">
      <label><input type="radio" /> Maruti Suzuki</label>
      <label><input type="radio" /> Hyundai</label>
      <label><input type="radio" /> Tata</label>
      <label><input type="radio" /> Mahindra</label>
    </div>
  </div>

  <div className="filter-section">
    <div className="filter-title">Price Range <span className="arrow-icon">⌃</span></div>

    <input type="range" min="2" max="15" />
    <div className="price-range-values">
      <span>₹2 Lakh</span>
      <span>₹15 Lakh</span>
    </div>
  </div>

  <div className="filter-section">
    <div className="filter-title">Model Year <span className="arrow-icon">⌄</span></div>
  </div>

  <div className="filter-section">
    <div className="filter-title">Kilometers Driven <span className="arrow-icon">⌄</span></div>
  </div>

  <div className="filter-section">
    <div className="filter-title">Fuel Type <span className="arrow-icon">⌄</span></div>
  </div>

  <button className="apply-btn">Apply Filters</button>
</aside>


      {/* RIGHT – CARS SECTION */}
      <section className="carListSection">
        <div className="top-bar">
          <p>Showing 24 of 1,234 cars</p>

          <select className="sort-box">
            <label>Sort by:</label>
            <option>Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* GRID OF CAR CARDS */}
        <div className="carsGrid">
         {cars.map((car) => {
  const [liked, setLiked] = useState(false);

  return (
    <div key={car.id} className="newCarCard">

      {/* IMAGE BOX */}
      <div className="newCarImgBox">
        <Image src={car.img} alt={car.name} fill className="newCarImg" />

        {/* Heart Icon */}
        <div 
          className="newHeart"
          onClick={() => setLiked(!liked)}
        >
          {liked ? <AiFillHeart size={26} color="red" /> : <AiOutlineHeart size={26} />}
        </div>

        <div className="newSeller">Seller</div>
      </div>

      {/* CONTENT */}
      <div className="newCarContent">
        <h3 className="newCarTitle">{car.name}</h3>

        <div className="newTags">
          <span className="newTag">{car.km}</span>
          <span className="newTag">{car.fuel}</span>
          <span className="newTag">{car.transmission}</span>
        </div>

        <p className="newPrice">₹ {car.price}</p>

        <div className="newLocation">
          <span>📍</span> Noida Sector 63
        </div>

        <button className="newContactBtn">Contact Seller</button>
      </div>
    </div>
  );
})}

        </div>

        {/* PAGINATION */}
        <div className="pagination">
          <button>Previous</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>Next</button>
        </div>
      </section>
    </div>
  );
}
