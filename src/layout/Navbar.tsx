import { Menu, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "HOME", to: "/" },
  { name: "HEADPHONES", to: "/headphones" },
  { name: "SPEAKERS", to: "/speakers" },
  { name: "EARPHONES", to: "/earphones" },
];

const Navbar = () => {
  const location = useLocation();

  const linkClasses = (to: string) =>
    `text-sm font-bold tracking-widest uppercase transition-colors duration-150 hover:text-primary-orangeish ${
      location.pathname === to || (to === "/" && location.pathname === "/")
        ? "text-primary-orangeish"
        : "text-white"
    }`;

  return (
    <nav className="bg-secondary-blackish w-full">
      <div className="mx-auto w-full max-w-7xl h-20 px-6 md:px-10 flex items-center justify-between">
        {/* ------------- MOBILE ------------- */}
        {/* Mobile: Hamburger */}
        <button
          aria-label="Open menu"
          className="lg:hidden md:hidden flex items-center"
        >
          <Menu className="text-white w-7 h-7" />
        </button>

        {/* Mobile: Center logo */}
        <Link
          to="/"
          className="flex-1 md:hidden lg:flex lg:flex-none lg:mr-14 text-white text-2xl font-bold tracking-widest flex justify-center lg:justify-start"
        >
          audiophile
        </Link>

        {/* ------------- TABLET ------------- */}
        {/* Tablet: Menu + Logo cluster */}
        <div className="hidden md:flex lg:hidden items-center gap-6">
          <button aria-label="Open menu">
            <Menu className="text-white w-7 h-7" />
          </button>
          <Link
            to="/"
            className="text-white text-2xl font-bold tracking-widest"
          >
            audiophile
          </Link>
        </div>

        {/* ------------- DESKTOP ------------- */}
        {/* Desktop: Nav Links */}
        <div className="hidden lg:flex flex-1 justify-center gap-8">
          {navLinks.map(({ name, to }) => (
            <Link key={name} to={to} className={linkClasses(to)}>
              {name}
            </Link>
          ))}
        </div>

        {/* Cart icon (always visible) */}
        <button aria-label="Cart" className="ml-4">
          <ShoppingCart className="text-white w-7 h-7" />
        </button>
      </div>
      {/* Divider */}
      <div className="w-full h-px bg-neutral-700" />
    </nav>
  );
};

export default Navbar;
