import Banner from "./components/Banner";
import Listing from "./components/Listing";
import BestDealer from "./components/BestDealer";
import NewlyAdded from "./components/NewlyAdded";
import HowWork from "./components/HowWork";
import PopularDealers from "./components/PopularDealers";
import PopularBrands from "./components/PopularBrands";
import VerifyDealerCity from "./components/VerifyDealerCity";
import NewsSection from "./components/NewsSection";
import DealerReviews from "./components/DealerReviews";


export default function Home() {
  return (
    <main className="flex flex-col">
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
      {/* Other sections will come here */}
    </main>
  );
}
