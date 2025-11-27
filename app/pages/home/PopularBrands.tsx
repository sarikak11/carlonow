import Image from "next/image";

export default function PopularBrands() {
  const brands = [
    "/image/brands/tata.png",
    "/image/brands/tata.png",
    "/image/brands/tata.png",
    "/image/brands/tata.png",
    "/image/brands/tata.png",
    "/image/brands/tata.png",
    "/image/brands/tata.png",
    "/image/brands/tata.png",
  ];

  return (
    <div className="w-full mt-20 px-4">
      {/* EXACT heading style from screenshot 2 */}
      <h2 className="text-[28px] font-bold text-[#1A1A1A] mb-12">
        Explore Popular Dealers Brands
      </h2>

      {/* Proper spacing + alignment like screenshot 2 */}
      <div className="flex items-center justify-between gap-16 flex-nowrap overflow-x-auto">
        {brands.map((src, i) => (
          <div key={i} className="flex flex-col items-center">
            <Image
              src={src}
              width={90}
              height={90}
              alt="Brand Logo"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
