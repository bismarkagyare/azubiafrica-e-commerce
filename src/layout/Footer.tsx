import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const navLinks = [
  { name: "HOME", to: "/" },
  { name: "HEADPHONES", to: "/headphones" },
  { name: "SPEAKERS", to: "/speakers" },
  { name: "EARPHONES", to: "/earphones" },
];

const footerIcons = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Instagram, label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary-blackish w-full mt-10">
      <div className="w-[170px] ml-27 md:ml-8 lg:ml-38 h-1 bg-primary-orangeish mb-10" />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 flex flex-col md:flex-row md:justify-between md:items-start gap-10 pb-10">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="text-white text-2xl font-bold tracking-widest mb-6 md:mb-12">
            audiophile
          </Link>

          <nav className="flex flex-col gap-4 mb-6 md:hidden">
            {navLinks.map(({ name, to }) => (
              <Link
                key={name}
                to={to}
                className="text-sm font-bold tracking-widest uppercase text-white hover:text-primary-orangeish transition-colors duration-150"
              >
                {name}
              </Link>
            ))}
          </nav>

          <p className="text-neutral-400 text-base max-w-md mb-6 md:mb-12">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
            specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
            facility - we're open 7 days a week.
          </p>

          <p className="text-neutral-400 text-sm mb-8 md:mt-auto md:mb-0">Copyright 2025. All Rights Reserved</p>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-end justify-between h-full">
          <nav className="hidden md:flex flex-row gap-8 mb-8 md:mb-12">
            {navLinks.map(({ name, to }) => (
              <Link
                key={name}
                to={to}
                className="text-sm font-bold tracking-widest uppercase text-white hover:text-primary-orangeish transition-colors duration-150"
              >
                {name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-6 md:gap-4">
            {footerIcons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-white hover:text-primary-orangeish transition-colors duration-150"
              >
                <Icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
