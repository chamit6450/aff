import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import HomeContent from "./components/HomeContent"; 
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Banner />
        </main>
      </div>
      <HomeContent /> 
      <Footer />
    </div>
  );
}
