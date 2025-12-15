"use client";
import { useState } from "react";
import Image from "next/image";
import "../../style/style.css";

export default function DealerReviews() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const reviews = [
    {
      id: 1,
      image: "/image/review/review1.jpg",
      video: "/videos/review1.mp4",
      title: "Carshaala | Ghaziabad",
      desc: "Hello India. How are you",
      rating: 4,
    },
    {
      id: 2,
      image: "/image/review/review1.jpg",
      video: "/videos/review2.mp4",
      title: "Carshaala | Ghaziabad",
      desc: "Hello India. How are you",
      rating: 4,
    },
    {
      id: 3,
      image: "/image/review/review1.jpg",
      video: "/videos/review3.mp4",
      title: "Carshaala | Ghaziabad",
      desc: "Hello India. How are you",
      rating: 4,
    },
    {
      id: 4,
      image: "/image/review/review1.jpg",
      video: "/videos/review4.mp4",
      title: "Carshaala | Ghaziabad",
      desc: "Hello India. How are you",
      rating: 4,
    },
     {
      id: 5,
      image: "/image/review/review1.jpg",
      video: "/videos/review1.mp4",
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

              {/* VIDEO MODE */}
              {activeVideo === item.id ? (
                <>
                  <video
                    src={item.video}
                    className="review-image"
                    controls
                    autoPlay
                  />

                  {/* ❌ Close Button */}
                  <div
                    className="close-video-btn"
                    onClick={() => setActiveVideo(null)}
                  >
                    ✖
                  </div>
                </>
              ) : (
                <>
                  {/* IMAGE MODE */}
                  <Image
                    src={item.image}
                    alt="Dealer Review"
                    width={400}
                    height={450}
                    className="review-image"
                  />

                  {/* ▶ Play Button */}
                  <div
                    className="play-btn"
                    onClick={() => setActiveVideo(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <span>▶</span>
                  </div>
                </>
              )}

              {/* Bottom Content */}
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
