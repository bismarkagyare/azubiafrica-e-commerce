import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainLayout from "./layout";
import Home from "./pages/home";
import HeadphonesCategory from "./pages/headphones";
import SpeakersCategory from "./pages/speakers";
import EarphonesCategory from "./pages/earphones";
import ProductDetails from "./pages/product-details";
import Checkout from "./pages/checkout";

import ScrollToTop from "./utils/scrollToTop";
import { CartProvider } from "@/contexts/CartContext";

function App() {
  const queryClient = new QueryClient();

  return (
      <CartProvider>
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
                <Route path="/checkout" element={<Checkout />} />
              </Route>
            </Routes>
          </QueryClientProvider>
        </Router>
        <ToastContainer />
      </CartProvider>
  );
}

export default App;
