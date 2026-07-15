import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";
import { Suspense, lazy } from "react";
import SEO from "./components/SEO";

const Home = lazy(() => import("./pages/Home"));
const Collections = lazy(() => import("./pages/Collections"));
const CollectionDetail = lazy(() => import("./pages/CollectionDetail"));
const Spaces = lazy(() => import("./pages/Spaces"));
const CaseDetail = lazy(() => import("./pages/CaseDetail"));
const CustomService = lazy(() => import("./pages/CustomService"));
const Craftsmanship = lazy(() => import("./pages/Craftsmanship"));
const Process = lazy(() => import("./pages/Process"));
const Quality = lazy(() => import("./pages/Quality"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const LandingQuote = lazy(() => import("./pages/LandingQuote"));
const Catalog = lazy(() => import("./pages/Catalog"));
const CatalogCategory = lazy(() => import("./pages/CatalogCategory"));
const CatalogDetail = lazy(() => import("./pages/CatalogDetail"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
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
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:category" element={<CatalogCategory />} />
            <Route path="/catalog/:category/:id" element={<CatalogDetail />} />
          </Route>
            <Route path="/landing/quote" element={<><SEO /><LandingQuote /></>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
