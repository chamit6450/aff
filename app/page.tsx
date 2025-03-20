import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import FlashSales from "./components/FlashSales";
import Products from "./components/Products";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <TopBanner />
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Banner />
        </main>
      </div>
      <FlashSales />
      <Products />
      <Footer />
    </div>
  );
}
