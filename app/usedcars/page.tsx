import Image from "next/image";
import "../style/usedcars.css";

export default function UsedCars() {
  const cars = [
    {
      id: 1,
      name: "2021 Maruti Suzuki Swift",
      price: "6.50 Lakh",
      km: "25,000 km",
      fuel: "Petrol",
      transmission: "Manual",
      img: "/cars/swift.webp",
    },
    {
      id: 2,
      name: "2022 Tata Nexon EV",
      price: "16.80 Lakh",
      km: "15,000 km",
      fuel: "Electric",
      transmission: "Automatic",
      img: "/cars/nexon.webp",
    },
    {
      id: 3,
      name: "2020 Hyundai Creta",
      price: "14.25 Lakh",
      km: "50,000 km",
      fuel: "Diesel",
      transmission: "Automatic",
      img: "/cars/creta.webp",
    },
    {
      id: 4,
      name: "2023 Mahindra Thar",
      price: "15.50 Lakh",
      km: "8,000 km",
      fuel: "Diesel",
      transmission: "Manual",
      img: "/cars/thar.webp",
    },
    {
      id: 5,
      name: "2019 Honda City",
      price: "9.75 Lakh",
      km: "35,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      img: "/cars/city.webp",
    },
    {
      id: 6,
      name: "2022 Maruti Baleno",
      price: "8.10 Lakh",
      km: "12,000 km",
      fuel: "Petrol",
      transmission: "Manual",
      img: "/cars/baleno.webp",
    },
  ];

  return (
    <div className="usedCarsPage">
      {/* LEFT – FILTER SIDEBAR */}
      <aside className="filters">
        <h3>Filter Results</h3>

        <div className="filterBox">
          <h4>Make & Model</h4>
          <label><input type="checkbox" /> Maruti Suzuki</label>
          <label><input type="checkbox" /> Hyundai</label>
          <label><input type="checkbox" /> Tata</label>
          <label><input type="checkbox" /> Mahindra</label>
        </div>

        <div className="filterBox">
          <h4>Price Range</h4>
          <input type="range" min="1" max="25" />
        </div>

        <button className="applyBtn">Apply Filters</button>
      </aside>

      {/* RIGHT – CARS SECTION */}
      <section className="carListSection">
        <div className="topBar">
          <p>Showing 24 of 1,234 cars</p>

          <select className="sortDropdown">
            <option>Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* GRID OF CAR CARDS */}
        <div className="carsGrid">
          {cars.map((car) => (
            <div key={car.id} className="carCard">
              <div className="carImageWrapper">
                <Image
                  src={car.img}
                  width={400}
                  height={250}
                  alt={car.name}
                  className="carImg"
                />
              </div>

              <h3 className="carName">{car.name}</h3>

              <div className="detailsRow">
                <span>{car.km}</span>
                <span>{car.fuel}</span>
                <span>{car.transmission}</span>
              </div>

              <p className="price">₹ {car.price}</p>

              <button className="detailsBtn">View Details</button>
            </div>
          ))}
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
