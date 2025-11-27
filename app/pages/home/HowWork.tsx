"use client";

export default function HowWorkSection() {
  const steps = [
    {
      title: "Trusted And Verify Dealer First",
      image: "/image/listcard/howcarlo.png",
    },
    {
      title: "Verify By Carlnow Locations & Documents",
      image: "/image/listcard/howcarlo.png",
    },
    {
      title: "Carlnow Check Customer Feedback",
      image: "/image/listcard/howcarlo.png",
    },
  ];

  return (
    <div className="px-6 mt-20">
      <h2 className="text-3xl font-semibold text-center mb-12">
        How Work Carlnow
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {steps.map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

            <img
              src={item.image}
              alt={item.title}
              className="w-[260px] h-[160px] object-cover rounded-lg mx-auto shadow-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
