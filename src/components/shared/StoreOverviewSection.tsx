import type { FC } from "react";
import bestGearImgDesktop from "@/assets/shared/desktop/image-best-gear.jpg";
import bestGearImgTablet from "@/assets/shared/tablet/image-best-gear.jpg";
import bestGearImgMobile from "@/assets/shared/mobile/image-best-gear.jpg";

type StoreOverviewSectionProps = {
  py?: string;
};

const StoreOverviewSection: FC<StoreOverviewSectionProps> = ({
  py = "py-20 md:py-28",
}) => {
  return (
    <section
      className={`w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-0 ${py} flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-8`}
    >
      <div className="flex-1 flex justify-center items-center w-full max-w-lg md:max-w-none lg:max-w-none order-1 lg:order-none">
        <picture className="w-full">
          <source media="(min-width:1024px)" srcSet={bestGearImgDesktop} />
          <source media="(min-width:640px)" srcSet={bestGearImgTablet} />
          <img
            src={bestGearImgMobile}
            alt="Person enjoying high-end audio gear"
            className="rounded-xl w-full h-auto object-cover object-center"
            draggable={false}
          />
        </picture>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-2 lg:order-none">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral-900 leading-tight">
          BRINGING YOU THE <span className="text-primary-orangeish">BEST</span>
          <br />
          AUDIO GEAR
        </h2>
        <p className="text-neutral-500 text-sm md:text-base max-w-xl">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default StoreOverviewSection;
