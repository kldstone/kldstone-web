import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetail";
import Spaces from "./pages/Spaces";
import CaseDetail from "./pages/CaseDetail";
import CustomService from "./pages/CustomService";
import Craftsmanship from "./pages/Craftsmanship";
import Process from "./pages/Process";
import Quality from "./pages/Quality";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LandingQuote from "./pages/LandingQuote";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/marble" element={<Collections filter="marble" />} />
          <Route path="/collections/mosaic" element={<Collections filter="mosaic" />} />
          <Route path="/collections/product/:id" element={<CollectionDetail />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
          <Route path="/custom" element={<CustomService />} />
          <Route path="/craftsmanship" element={<Craftsmanship />} />
          <Route path="/process" element={<Process />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
          <Route path="/landing/quote" element={<LandingQuote />} />
      </Routes>
    </BrowserRouter>
  );
}
