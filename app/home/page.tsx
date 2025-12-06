// app/home/page.tsx
import React from "react";


// Home page sections
import Banner from "./Banner";
import Listing from "./Listing";
import BestDealer from "./BestDealer";
import NewlyAdded from "./NewlyAdded";
import HowWork from "./HowWork";
import PopularDealers from "./PopularDealers";
import PopularBrands from "./PopularBrands";
import VerifyDealerCity from "./VerifyDealerCity";
import NewsSection from "./NewsSection";
import DealerReviews from "./DealerReviews";

// CSS for each component
import "../style/banner.css";
import "../style/listing.css";
import "../style/bestdeal.css";
import "../style/newadded.css";

import "../style/news.css";
import "../style/dealers.css";
import "../style/style.css";
export default function HomePage() {
  return (
    <>
      
      <main>
        <Banner />
        <Listing />
        <BestDealer />
        <NewlyAdded />
        <HowWork />
        <PopularDealers />
        <PopularBrands />
        <VerifyDealerCity />
        <NewsSection />
        <DealerReviews />
      </main>
      
    </>
  );
}
