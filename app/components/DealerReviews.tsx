import Image from "next/image";

export default function DealerReviews() {
  const reviews = [
    {
      id: 1,
      image: "/image/reviews/car.jpg",
      title: "Carshaala | Ghaziabad",
      desc: "Hello India. How are you",
      rating: 4,
    },
    {
      id: 2,
      image: "/image/reviews/car.jpg",
      title: "Carshaala | Ghaziabad",
      desc: "Hello India. How are you",
      rating: 4,
    },
    {
      id: 3,
      image: "/image/reviews/car.jpg",
      title: "Carshaala | Ghaziabad",
      desc: "Hello India. How are you",
      rating: 4,
    },
    {
      id: 4,
      image: "/image/reviews/car.jpg",
      title: "Carshaala | Ghaziabad",
      desc: "Hello India. How are you",
      rating: 4,
    },
  ];

  return (
    <div className="w-full mt-16 px-4">
      <h2 className="text-2xl font-bold text-center mb-10">
        5 Lakh + Dealer Reviews
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="w-full bg-white rounded-xl shadow-md overflow-hidden"
            style={{ maxWidth: "280px", margin: "0 auto" }}
          >
            {/* Logo */}
            <p className="p-4 text-xl font-semibold">Logo</p>

            {/* Image with play button */}
            <div className="relative">
              <Image
                src={item.image}
                alt="Dealer review"
                width={400}
                height={300}
                className="rounded-xl object-cover"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">▶</span>
                </div>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-2 left-2 text-white text-sm">
                <p className="font-semibold">{item.title}</p>
                <p className="text-xs">{item.desc}</p>

                {/* Star Rating */}
                <div className="flex text-yellow-400 mt-1">
                  {"★".repeat(item.rating)}
                  {"☆".repeat(5 - item.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra white footer-like space */}
      <div className="h-20"></div>
    </div>
  );
}
