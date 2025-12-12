"use client";
import Image from "next/image";
import "../../style/style.css";

export default function PopularBrands() {
  const brands = [
    {
      id: 1,
      logo: "/image/brands/brand6.png",
      car: "/image/brands/tata image.png",
      name: "Tata",
    },
    {
      id: 2,
      logo: "/image/brands/suzuki.png",
      car: "/image/brands/suzuki image.png",
      name: "Suzuki",
    },
    {
      id: 3,
      logo: "/image/brands/brand3.png",
      car: "/image/brands/bmw image.png",
      name: "BMW",
    },
    {
      id: 4,
      logo: "/image/brands/skoda brand.png",
      car: "/image/brands/skoda image.png",
      name: "skoda",
    },
    {
      id: 5,
      logo: "/image/brands/brand4.png",
      car: "/image/brands/honda image.png",
      name: "Honda",
    },
    {
      id: 6,
      logo: "/image/brands/toyta.png",
      car: "/image/brands/toyta image.png",
      name: "Toyta",
    },
    {
      id: 7,
      logo: "/image/brands/jeep.png",
      car: "/image/brands/jeep image.png",
      name: "jeep",
    },  
    {
      id: 8,
      logo: "/image/brands/brand5.png",
      car: "/image/brands/mahindra image.png",
      name: "Honda",
    },
  ];

  return (
    <section className="popularbrands-wrapper">
      <h2 className="pb-heading">Explore Popular Dealers Brands</h2>

      <div className="pb-grid">
        {brands.map((brand) => (
          <div key={brand.id} className="pb-card">
            <div className="pb-logo">
              <Image
                src={brand.logo}
                width={120}
                height={50}
                alt={brand.name}
              />
            </div>

            <div className="pb-car">
              <Image
                src={brand.car}
                width={250}
                height={150}
                alt={brand.name + " car"}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
