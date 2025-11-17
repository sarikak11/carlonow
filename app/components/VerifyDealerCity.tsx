import Image from "next/image";

export default function VerifyCity() {
  const cities = [
    "/image/city/delhi.png",
    "/image/city/delhi.png",
    "/image/city/delhi.png",
    "/image/city/delhi.png",
    "/image/city/delhi.png",
    "/image/city/delhi.png",
  ];

  return (
    <div className="w-full mt-14 px-6">
      <h2 className="text-2xl font-bold mb-10">
        Carlonow Verify Delear in Your City
      </h2>

      <div className="flex justify-between items-start gap-10">
        {cities.map((src, i) => (
          <div key={i} className="flex flex-col items-center w-[160px]">
            <Image
              src={src}
              width={150}
              height={150}
              alt="City"
              className="rounded-md object-cover"
            />

            <h3 className="text-xl font-semibold mt-3">Delhi</h3>
            <p className="text-sm leading-4 mt-1 text-center">
              500 + Verify Delear <br /> 1000 + Used Car
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
