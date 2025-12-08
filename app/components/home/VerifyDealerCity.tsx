import Image from "next/image";
import "../../style/style.css";



export default function VerifyDealerCity() {
  const cities = [
    "/image/city/delhi.png",
    "/image/city/delhi.png",
    "/image/city/delhi.png",
    "/image/city/delhi.png",
    "/image/city/delhi.png",
    "/image/city/delhi.png",
  ];

  
  return (
    <div className="section-wrapper">   {/* SAME CONTAINER */}
      <h2 className="section-heading">Carlonow Verify Dealer in Your City</h2>

      <div className="city-row">
        {cities.map((src, i) => (
          <div key={i} className="city-card">
            <Image src={src} width={120} height={120} alt="City" />

            <h3 className="city-name">Delhi</h3>

            <p className="city-info">
              500+ Verified Dealers <br />
              1000+ Used Cars
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}