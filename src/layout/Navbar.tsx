import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/hooks/useCart";
import CheckoutCard from "@/components/cards/CheckoutCard";
import CategoriesSection from "@/components/shared/CategorySection";

const navLinks = [
  { name: "HOME", to: "/" },
  { name: "HEADPHONES", to: "/headphones" },
  { name: "SPEAKERS", to: "/speakers" },
  { name: "EARPHONES", to: "/earphones" },
];

export default function Navbar() {
  const location = useLocation();
  const { cartCount } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", showMenu);
    return () => document.body.classList.remove("overflow-hidden");
  }, [showMenu]);

  const linkClasses = (to: string) =>
    `text-sm font-bold tracking-widest uppercase transition-colors duration-150 hover:text-primary-orangeish ${
      location.pathname === to || (to === "/" && location.pathname === "/")
        ? "text-primary-orangeish"
        : "text-white"
    }`;

  return (
    <>
      {showCart && <CheckoutCard onClose={() => setShowCart(false)} />}

      <nav className="bg-secondary-blackish w-full relative z-40">
        <div className="mx-auto w-full max-w-[1220px] h-20 px-6 md:px-10 flex items-center justify-between">
          <button
            aria-label="Toggle menu"
            className="lg:hidden md:hidden flex items-center cursor-pointer"
            onClick={() => setShowMenu((p) => !p)}
          >
            {showMenu ? <X className="text-white w-7 h-7" /> : <Menu className="text-white w-7 h-7" />}
          </button>

          <Link
            to="/"
            className="flex-1 md:hidden lg:flex lg:flex-none lg:mr-14 text-white text-2xl font-bold tracking-widest flex justify-center lg:justify-start"
            onClick={() => setShowMenu(false)}
          >
            audiophile
          </Link>

          <div className="hidden md:flex lg:hidden items-center gap-6">
            <button aria-label="Toggle menu" onClick={() => setShowMenu((p) => !p)} className="cursor-pointer">
              {showMenu ? <X className="text-white w-7 h-7" /> : <Menu className="text-white w-7 h-7" />}
            </button>
            <Link
              to="/"
              className="text-white text-2xl font-bold tracking-widest"
              onClick={() => setShowMenu(false)}
            >
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

      <AnimatePresence>
        {showMenu && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black z-30 lg:hidden"
              onClick={() => setShowMenu(false)}
            />
            <motion.div
              key="drawer"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto lg:hidden"
            >
              <div className="bg-white w-full shadow-xl pb-10">
                <CategoriesSection py="py-20" onSelect={() => setShowMenu(false)}/>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
