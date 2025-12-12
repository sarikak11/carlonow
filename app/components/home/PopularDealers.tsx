import "../../style/dealers.css";  // ✔ correct for normal CSS

export default function Dealers() {
  const dealers = [
    {
      name: "Velocity Vehicles",
      rating: 4.9,
      reviews: "250+",
      desc: "Your local trusted family dealer.",
      img: "/image/popularsdeals/image4.png",
    },
    {
      name: "Sunset Cars",
      rating: 4.8,
      reviews: "210+",
      desc: "Premium selection and service.",
      img: "/image/popularsdeals/image4.png",
    },
    {
      name: "Apex Auto Group",
      rating: 4.8,
      reviews: "195+",
      desc: "Performance cars for enthusiasts.",
      img: "/image/popularsdeals/image4.png",
    },
    {
      name: "Heritage Motors",
      rating: 4.7,
      reviews: "180+",
      desc: "Classic cars, timeless quality.",
      img: "/image/popularsdeals/image4.png",
    },
     {
      name: "Heritage Motors",
      rating: 4.7,
      reviews: "180+",
      desc: "Classic cars, timeless quality.",
      img: "/image/popularsdeals/image4.png",
    },
  ];

  return (
    <div className="carlonow-dealer-container">
       <h2 className="carlonow-dealer-heading">
        Explore Popular Dealers In Your City
      </h2>
      <div className="carlonow-dealer-filters">
        <select className="carlonow-dealer-select">
          <option>Sort By: Rating</option>
          <option>Sort By: Reviews</option>
        </select>

        <select className="carlonow-dealer-select">
          <option>Filter: Brand</option>
          <option>BMW</option>
          <option>Audi</option>
          <option>Toyota</option>
        </select>

        <select className="carlonow-dealer-select">
          <option>Filter: Services</option>
          <option>Financing</option>
          <option>Repair</option>
          <option>Body Shop</option>
        </select>
      </div>

      <div className="carlonow-dealer-grid">
        {dealers.map((dealer, index) => (
          <div key={index} className="carlonow-dealer-card">
            <img
              src={dealer.img}
              alt={dealer.name}
              className="carlonow-dealer-image"
            />

            <h3 className="carlonow-dealer-title">{dealer.name}</h3>

            <div className="carlonow-dealer-rating">
              ⭐ {dealer.rating}
              <span className="carlonow-dealer-reviewCount">
                ({dealer.reviews} Reviews)
              </span>
            </div>

            <p className="carlonow-dealer-desc">{dealer.desc}</p>

            <div className="carlonow-dealer-btnRow">
              <button className="carlonow-dealer-primaryBtn">View Profile</button>
              <button className="carlonow-dealer-secondaryBtn">Contact</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
