"use client";
import Image from "next/image";
import "../../style/style.css";


export default function HowWeWork() {
  const steps = [
    {
      icon: "/icons/trusted.png",
      title: "Trusted Since 1989",
      description:
        "We provide transparent and reliable services for all your car needs.",
    },
    {
      icon: "/icons/paper.png",
      title: "Verify by Paperwork",
      description:
        "All vehicles are fully documented and verified for your peace of mind.",
    },
    {
      icon: "/icons/customer.png",
      title: "Customer Check",
      description:
        "We prioritize customer satisfaction with thorough checks and feedback.",
    },
  ];

  return (
    <section className="how-section">
      <h2 className="how-title">How We Work For You</h2>

      <div className="how-grid">
        {steps.map((item, index) => (
          <div className="how-card" key={index}>
            <div className="how-icon">
              <Image src={item.icon} alt="icon" width={55} height={55} />
            </div>

            <h3 className="how-card-title">{item.title}</h3>
            <p className="how-card-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}