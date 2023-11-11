import "./App.css";
import AboveNavbar from "./Component/AboveNavbar";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import MechanicalData from "./Component/MechanicalData";
import NavBar from "./Component/NavBar";
import NewsLetter from "./Component/NewsLetter";
import OurTrades from "./Component/OurTrades";
import Plumbing from "./Component/Plumbing";
import Services from "./Component/Services";
import StartWithUs from "./Component/StartWithUs";

function App() {
  return (
    <>
      <AboveNavbar />
      <NavBar />
      <Banner />
      <MechanicalData />
      <Plumbing />
      <Services />
      <StartWithUs />
      <OurTrades />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
