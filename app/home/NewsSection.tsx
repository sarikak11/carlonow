"use client";

import { useState } from "react";
import Image from "next/image";
import "../style/news.css"; // ✅ import your CSS file

export default function NewsSection() {
  const newsList = [
    {
      id: 1,
      title: "Women's Basketball Semifinals Preview And Schedule",
      desc: "The semifinal showdown is set to be an intense match...",
      image: "/image/newsimg/newsimg1.png",
      full:
        "Full detailed article about Women's Basketball Semifinals. Here you can add long content...",
    },
    {
      id: 2,
      title: "Snoop Dogg Breaking Electrifies Paris 2024 Olympics",
      desc: "The breaking competition kicked off with a massive performance...",
      image: "/image/newsimg/newsimg2.png",
      full:
        "Full detailed article about Snoop Dogg electrifying the Olympics...",
    },
    {
      id: 3,
      title: "Carlos Nasar Wins 89kg Gold and Breaks World Record",
      desc: "The Bulgarian weightlifter smashed the world record...",
      image: "/image/newsimg/newsimg3.png",
      full:
        "Full article about Carlos Nasar's incredible record...",
    },
  ];

  const [activeNews, setActiveNews] = useState(newsList[0]);

  return (
    <div className="news-wrapper">
      <h2 className="news-heading">Latest Automobile News</h2>

      <div className="news-grid">

        {/* LEFT SIDE — FULL ARTICLE */}
        <div className="news-left">
          <Image
            src={activeNews.image}
            alt="News"
            width={800}
            height={400}
            className="news-main-image"
          />

          <h3 className="news-title">{activeNews.title}</h3>
          <p className="news-full">{activeNews.full}</p>
        </div>

        {/* RIGHT SIDE — NEWS LIST */}
        <div className="news-right">
          {newsList.map((news) => (
            <div
              key={news.id}
              onClick={() => setActiveNews(news)}
              className="news-item"
            >
              <Image
                src={news.image}
                alt="Small News"
                width={120}
                height={80}
                className="news-thumb"
              />

              <div className="news-content">
                <h4 className="news-item-title">{news.title}</h4>
                <p className="news-item-desc">{news.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
