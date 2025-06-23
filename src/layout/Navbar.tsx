import { useCart } from "@/hooks/useCart";
import { Menu, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import CheckoutCard from "@/components/cards/CheckoutCard";

const navLinks = [
  { name: "HOME", to: "/" },
  { name: "HEADPHONES", to: "/headphones" },
  { name: "SPEAKERS", to: "/speakers" },
  { name: "EARPHONES", to: "/earphones" },
];

const Navbar = () => {
  const location = useLocation();
  const { cartCount } = useCart();
  const [showCart, setShowCart] = useState(false);

  const linkClasses = (to: string) =>
    `text-sm font-bold tracking-widest uppercase transition-colors duration-150 hover:text-primary-orangeish ${
      location.pathname === to || (to === "/" && location.pathname === "/") ? "text-primary-orangeish" : "text-white"
    }`;

  return (
    <>
      {showCart && <CheckoutCard onClose={() => setShowCart(false)} />}
      <nav className="bg-secondary-blackish w-full">
        <div className="mx-auto w-full max-w-7xl h-20 px-6 md:px-10 flex items-center justify-between">
          <button aria-label="Open menu" className="lg:hidden md:hidden flex items-center">
            <Menu className="text-white w-7 h-7" />
          </button>

          <Link
            to="/"
            className="flex-1 md:hidden lg:flex lg:flex-none lg:mr-14 text-white text-2xl font-bold tracking-widest flex justify-center lg:justify-start"
          >
            audiophile
          </Link>

          <div className="hidden md:flex lg:hidden items-center gap-6">
            <button aria-label="Open menu">
              <Menu className="text-white w-7 h-7" />
            </button>
            <Link to="/" className="text-white text-2xl font-bold tracking-widest">
              audiophile
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 justify-center gap-8">
            {navLinks.map(({ name, to }) => (
              <Link key={name} to={to} className={linkClasses(to)}>
                {name}
              </Link>
            ))}
          </div>

          <button aria-label="Cart" className="ml-4 relative cursor-pointer" onClick={() => setShowCart(true)}>
            <ShoppingCart className="text-white w-7 h-7" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[12px] font-medium bg-primary-orangeish text-white rounded-full px-[6px] py-[4px] leading-none text-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        <div className="w-full h-px bg-neutral-700" />
      </nav>
    </>
  );
};

export default Navbar;
