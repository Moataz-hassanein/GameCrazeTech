import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/Pages/HomePage";
import GameList from "../Components/GameList/GameList";
import HardwareList from "../Components/UpgradePage/HardwareList";
import GamePage from "../Components/GamePage/GamePage";
import GraphicCard from "../Components/HardwarePages/GraphicCard";
import Motherboard from "../Components/HardwarePages/Motherboard";
import Processor from "../Components/HardwarePages/Processor";
import Ram from "../Components/HardwarePages/Ram";
import SSD from "../Components/HardwarePages/SSD";
import PcsList from "../Components/Pcs/PcsList";
import About from "../Components/Pages/About";
import Contact from "../Components/Pages/Contact";
import Cart from "../Components/Cart/Cart";
import PcPage from "../Components/Pcs/PcPage";
import HardwarePage from "../Components/UpgradePage/HardwarePage";
import ProductPage from "../Components/HardwarePages/ProductPage";
import NotFound from "../Components/Pages/NotFound";
import Thanks from "../Components/Pages/Thanks";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gameList" element={<GameList />} />
      <Route path="/gameList/gamePage/:id" element={<GamePage />} />
      <Route path="/hardwareList" element={<HardwareList />} />
      <Route path="/graphicCard" element={<GraphicCard />} />
      <Route path="/motherboard" element={<Motherboard />} />
      <Route path="/processor" element={<Processor />} />
      <Route path="/ram" element={<Ram />} />
      <Route path="/ssd" element={<SSD />} />
      <Route path="/readyPc" element={<PcsList />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
     { <Route path="/cart" element={<Cart />} />}
      <Route path="/readyPc/pcPage/:id" element={<PcPage />} />
      <Route path="/hardwareList/hardwarePage/:id" element={<HardwarePage />} />
      <Route path="/productPage/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  );
};

export default Router;
