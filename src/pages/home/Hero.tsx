import heroBgDesktop from "@/assets/home/desktop/image-hero.jpg";
import heroBgMobile from "@/assets/home/mobile/image-header.jpg";
import heroBgTablet from "@/assets/home/tablet/image-header.jpg";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[32rem] md:min-h-[40rem] lg:min-h-[48rem] flex items-center justify-center bg-secondary-blackish overflow-hidden">
      <picture className="absolute inset-0 w-full h-full select-none pointer-events-none z-0">
        <source media="(min-width:1024px)" srcSet={heroBgDesktop} />
        <source media="(min-width:768px)" srcSet={heroBgTablet} />
        <img
          src={heroBgMobile}
          alt="XX99 Mark II Headphones"
          className="w-full h-full object-contain md:object-contain lg:object-cover object-center"
        />
      </picture>

      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center lg:justify-start px-6 md:px-10 pt-20 md:pt-24 lg:pt-0 pb-16 min-h-[32rem]">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-sm tracking-[0.7em] text-neutral-400 mb-6 uppercase font-medium">New Product</span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            XX99 MARK II <br className="hidden md:block" /> HEADPHONES
          </h1>

          <p className="text-neutral-300 text-base md:text-lg max-w-md mb-10">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>

          <button className="bg-primary-orangeish hover:bg-primary-orangeish/80 text-white font-bold uppercase tracking-widest px-10 py-4 text-base rounded-none transition-colors duration-150 cursor-pointer">
            See Product
          </button>
        </div>

        {/* spacer (desktop only) for centering img */}
        <div className="hidden lg:block flex-1" />
      </div>
    </section>
  );
};

export default Hero;
