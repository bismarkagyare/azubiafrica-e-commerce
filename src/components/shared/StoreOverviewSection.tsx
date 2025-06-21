import bestGearImg from "@/assets/shared/desktop/image-best-gear.jpg";

const StoreOverviewSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-20 md:py-28 flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-8">
      <div className="flex-1 flex justify-center items-center w-full max-w-lg lg:max-w-none order-1 lg:order-none">
        <img
          src={bestGearImg}
          alt="Person enjoying high-end audio gear"
          className="rounded-xl w-full h-auto object-cover object-center"
          draggable={false}
        />
      </div>


      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-none">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900 leading-tight">
          BRINGING YOU THE <span className="text-primary-orangeish">BEST</span>
          <br />
          AUDIO GEAR
        </h2>
        <p className="text-neutral-500 text-sm md:text-base max-w-xl">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
          speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to
          browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default StoreOverviewSection;
