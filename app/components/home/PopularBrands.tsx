import Image from "next/image";
import "../../style/style.css";


export default function PopularBrands() {
  const brands = [
    { image: "/image/brands/brand7.png", name: "Toyota" },
    { image: "/image/brands/brand1.png", name: "Mercedes-Benz" },
    { image: "/image/brands/brand2.png", name: "Hyundai" },
    { image: "/image/brands/brand3.png", name: "Tata" },
    { image: "/image/brands/brand4.png", name: "Honda" },
    { image: "/image/brands/brand5.png", name: "Mahindra" },
    { image: "/image/brands/brand6.png", name: "Tata" },
    { image: "/image/brands/brand8.png", name: "Audi" },
  ];

  return (
    <div className="popular-section">
      <h2 className="popular-heading">Explore Popular Dealers Brands</h2>

      <div className="brands-grid">
        {brands.map((brand, i) => (
          <div key={i} className="brand-card">
            <Image
              src={brand.image}
              width={80}
              height={80}
              alt={brand.name}
              className="brand-logo"
            />
            <p className="brand-name">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
