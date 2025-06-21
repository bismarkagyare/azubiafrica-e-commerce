import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="font-poppins">
      <Navbar />
      <div className="min-h-[60vh]">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
