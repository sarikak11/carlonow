"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MapPin, Search, ChevronRight } from "lucide-react";
/**
 * Header Component
 * -----------------
 * Displays the main site navigation including:
 * - Logo
 * - Used Cars & Near Dealer dropdowns
 * - Search bar
 * - Location & Login button
 *
 * Hover over "Used Cars" or "Near Dealer" to see dropdowns.
 */
export default function Header() {

  // State to toggle dropdown visibility
  
  const [usedCarsOpen, setUsedCarsOpen] = useState(false);
  const [nearDealerOpen, setNearDealerOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="max-w-[1300px] mx-auto flex flex-wrap items-center justify-between py-4 px-6 gap-3 sm:gap-4">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-700 tracking-wide">
          CARLONOW
        </Link>

        {/* Center: Dropdowns + Search */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-1 min-w-[250px]">

          {/* USED CARS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setUsedCarsOpen(true)}
            onMouseLeave={() => setUsedCarsOpen(false)}
          >
            <button className="flex items-center gap-1 bg-gray-100 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-200">
              Used Cars
              <ChevronDown size={16} />
            </button>

            {usedCarsOpen && (
              <div className="absolute left-0 mt-3 bg-white shadow-lg border rounded-lg w-[800px] z-50 p-6 grid grid-cols-3 gap-6 text-sm">
                {/* Column 1 */}
                <div>
                  <h4 className="font-semibold mb-3">Buy Used Cars in New Delhi</h4>
                  <ul className="space-y-2">
                    <li><Link href="#" className="hover:text-blue-600">Browse by Model <ChevronRight size={14} className="inline ml-1" /></Link></li>
                    <li><Link href="#" className="hover:text-blue-600">Browse by Make <ChevronRight size={14} className="inline ml-1" /></Link></li>
                    <li><Link href="#" className="hover:text-blue-600">Browse by Price <ChevronRight size={14} className="inline ml-1" /></Link></li>
                    <li><Link href="#" className="hover:text-blue-600">Browse by Body Type <ChevronRight size={14} className="inline ml-1" /></Link></li>
                    <li><Link href="#" className="hover:text-blue-600">Browse by Transmission <ChevronRight size={14} className="inline ml-1" /></Link></li>
                    <li><Link href="#" className="hover:text-blue-600">Browse by City <ChevronRight size={14} className="inline ml-1" /></Link></li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h4 className="font-semibold mb-3">Browse by Model</h4>
                  <ul className="space-y-2">
                    <li><Link href="#">Used Hyundai i10 Cars in New Delhi</Link></li>
                    <li><Link href="#">Used Maruti Wagon R Cars in New Delhi</Link></li>
                    <li><Link href="#">Used Maruti Baleno Cars in New Delhi</Link></li>
                    <li><Link href="#">Used Maruti Swift Cars in New Delhi</Link></li>
                    <li><Link href="#">Used Hyundai i20 Cars in New Delhi</Link></li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div>
                  <h4 className="font-semibold mb-3 text-transparent">.</h4>
                  <ul className="space-y-2">
                    <li><Link href="#">Used Hyundai Creta Cars in New Delhi</Link></li>
                    <li><Link href="#">Used Maruti Alto Cars in New Delhi</Link></li>
                    <li><Link href="#">Used Maruti Dzire Cars in New Delhi</Link></li>
                    <li><Link href="#">Used Tata Nexon Cars in New Delhi</Link></li>
                  </ul>

                  <Link
                    href="#"
                    className="text-orange-600 text-sm font-semibold mt-3 inline-block"
                  >
                    Buy cars online →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* NEAR DEALER DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setNearDealerOpen(true)}
            onMouseLeave={() => setNearDealerOpen(false)}
          >
            <button className="flex items-center gap-1 bg-gray-100 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-200">
              Near Dealer
              <ChevronDown size={16} />
            </button>

            {nearDealerOpen && (
              <div className="absolute left-0 mt-3 bg-white shadow-lg border rounded-lg w-[500px] z-50 p-4 grid grid-cols-2 gap-6 text-sm">
                <ul className="space-y-2">
                  <li><Link href="#">Near by Car Dealer</Link></li>
                  <li><Link href="#">View all Car Dealer</Link></li>
                  <li><Link href="#">View Car Dealers in Delhi</Link></li>
                  <li><Link href="#">View Car Dealers in Noida</Link></li>
                  <li><Link href="#">View Car Dealers in Ghaziabad</Link></li>
                </ul>
                <ul className="space-y-2">
                  <li><Link href="#">View Car Dealers in Gurugram</Link></li>
                  <li><Link href="#">View Car Dealers in Faridabad</Link></li>
                  <li><Link href="#">View Car Dealers in Greater Noida</Link></li>
                  <li><Link href="#">View Car Dealers in Lucknow</Link></li>
                </ul>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="flex items-center border-2 border-blue-700 rounded-full overflow-hidden w-[350px] max-w-full">
            <input
              type="text"
              placeholder="Search Your Car"
              className="flex-1 px-4 py-2 outline-none text-sm"
            />
            <button className="bg-white px-3 text-blue-700">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Right: Location + Login */}
        <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-0">
          <div className="flex items-center gap-1 text-blue-700 font-semibold">
            <MapPin size={18} />
            <span className="text-sm">Noida</span>
          </div>

          <Link
            href="/login"
            className="bg-blue-700 text-white font-semibold text-sm px-5 py-2 rounded-full hover:bg-blue-800"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
