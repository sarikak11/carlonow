"use client";

import { useState } from "react";
import Image from "next/image";

export default function NewsSection() {
  const newsList = [
    {
      id: 1,
      title: "Women's Basketball Semifinals Preview And Schedule",
      desc: "The semifinal showdown is set to be an intense match...",
      image: "/image/news/news1.jpg",
      full:
        "Full detailed article about Women's Basketball Semifinals. Here you can add long content...",
    },
    {
      id: 2,
      title: "Snoop Dogg Breaking Electrifies Paris 2024 Olympics",
      desc: "The breaking competition kicked off with a massive performance...",
      image: "/image/news/news2.jpg",
      full:
        "Full detailed article about Snoop Dogg electrifying the Olympics...",
    },
    {
      id: 3,
      title: "Carlos Nasar Wins 89kg Gold and Breaks World Record",
      desc: "The Bulgarian weightlifter smashed the world record...",
      image: "/image/news/news3.jpg",
      full:
        "Full article about Carlos Nasar's incredible record...",
    },
  ];

  const [activeNews, setActiveNews] = useState(newsList[0]);

  return (
    <div className="w-full mt-12 px-4">
      <h2 className="text-2xl font-bold mb-8">Latest Automobile News</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT SIDE — FULL ARTICLE */}
        <div className="md:col-span-2">
          <Image
            src={activeNews.image}
            alt="News"
            width={800}
            height={400}
            className="rounded-lg w-full object-cover"
          />

          <h3 className="text-2xl font-bold mt-4">{activeNews.title}</h3>
          <p className="text-gray-600 mt-2">{activeNews.full}</p>
        </div>

        {/* RIGHT SIDE — NEWS LIST */}
        <div className="space-y-6">
          {newsList.map((news) => (
            <div
              key={news.id}
              onClick={() => setActiveNews(news)}
              className="cursor-pointer p-3 rounded-lg hover:bg-gray-100 transition border flex gap-3"
            >
              <Image
                src={news.image}
                alt="Small News"
                width={120}
                height={80}
                className="rounded-md object-cover"
              />

              <div className="flex flex-col">
                <h4 className="text-md font-semibold">{news.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {news.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
