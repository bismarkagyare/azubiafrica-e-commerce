import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout";
import Home from "./pages/home";
import HeadphonesCategory from "./pages/headphones";
import SpeakersCategory from "./pages/speakers";
import EarphonesCategory from "./pages/earphones";
import ProductDetails from "./pages/product-details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  const queryClient = new QueryClient();

  return (
    <Router>
      <ScrollToTop />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/headphones" element={<HeadphonesCategory />} />
            <Route path="/speakers" element={<SpeakersCategory />} />
            <Route path="/earphones" element={<EarphonesCategory />} />
            <Route path=":category/:productSlug" element={<ProductDetails />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
