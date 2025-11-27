import Banner from "./pages/home/Banner";
import Listing from "./pages/home/Listing";
import BestDealer from "./pages/home/BestDealer";
import NewlyAdded from "./pages/home/NewlyAdded";
import HowWork from "./pages/home/HowWork";
import PopularDealers from "./pages/home/PopularDealers";
import PopularBrands from "./pages/home/PopularBrands";
import VerifyDealerCity from "./pages/home/VerifyDealerCity";
import NewsSection from "./pages/home/NewsSection";
import DealerReviews from "./pages/home/DealerReviews";


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
