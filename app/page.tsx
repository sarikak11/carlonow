// app/home/page.tsx
import React from "react";

 
// Home page sections
import Banner from "@/components/home/Banner";
import Listing from "@/components/home/Listing";
import BestDealer from "@/components/home/BestDealer";
import NewlyAdded from "@/components/home/NewlyAdded";
import HowWork from "@/components/home/HowWork";
import PopularDealers from "@/components/home/PopularDealers";
import PopularBrands from "@/components/home/PopularBrands";
import VerifyDealerCity from "@/components/home/VerifyDealerCity";
import NewsSection from "@/components/home/NewsSection";
import DealerReviews from "@/components/home/DealerReviews";

// CSS for each component
import "@/style/banner.css";
import "@/style/listing.css";
import "@/style/bestdeal.css";
import "@/style/newadded.css";

import "@/style/news.css";
import "@/style/dealers.css";
import "@/style/style.css";
export default function HomePage() {
  return (
    <>
      
      <main>
        <Banner />

         <div className="w-[95%] mx-auto">
        <Listing />
        <BestDealer />
        <NewlyAdded />
       
        <PopularDealers />
        <PopularBrands />
        <VerifyDealerCity />
         <HowWork />
        <NewsSection />
        <DealerReviews />
        </div>
      </main>
      
    </>
  );
}
