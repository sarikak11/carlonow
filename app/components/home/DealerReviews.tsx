import Image from "next/image";
import "../../style/style.css";
 
;

export default function DealerReviews() {
  const reviews = [
    {
      id: 1,
      image: "/image/review/review1.jpg",
      title: "Carshaala | Ghaziabad",
      desc: "Hello India. How are you",
      rating: 4,
    },
    {
      id: 2,
      image: "/image/review/review1.jpg",
      title: "Carshaala | Ghaziabad",
      desc: "Hello India. How are you",
      rating: 4,
    },
    {
      id: 3,
      image: "/image/review/review1.jpg",
      title: "Carshaala | Ghaziabad",
      desc: "Hello India. How are you",
      rating: 4,
    },
    {
      id: 4,
      image:"/image/review/review1.jpg",
      title: "Carshaala | Ghaziabad",
      desc: "Hello India. How are you",
      rating: 4,
    },
  ];

  return (
    <div className="dealer-section">
      <h2 className="dealer-heading">5 Lakh + Dealer Reviews</h2>

      <div className="dealer-grid">
        {reviews.map((item) => (
          <div key={item.id} className="dealer-card">

            <div className="img-box">
              <p className="logo-text">Logo</p>

              <Image
                src={item.image}
                alt="Dealer Review"
                width={400}
                height={450}
                className="review-image"
              />

              <div className="play-btn">
                <span>▶</span>
              </div>

              <div className="bottom-content">
                <p className="title">{item.title}</p>
                <p className="desc">{item.desc}</p>

                <div className="stars">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      <div className="bottom-space"></div>
    </div>
  );
}
