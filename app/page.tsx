import Banner from "./components/Banner";
import Listing from "./components/Listing";
import BestDealer from "./components/BestDealer";
import NewlyAdded from "./components/NewlyAdded";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Banner />
      <Listing />
      <BestDealer />
      <NewlyAdded />
      {/* Other sections will come here */}
    </main>
  );
}
