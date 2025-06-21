import speakerDesktopImg from "@/assets/home/desktop/image-speaker-zx7.jpg";
import speakerMobileImg from "@/assets/home/mobile/image-speaker-zx7.jpg";
import speakerTabletImg from "@/assets/home/tablet/image-speaker-zx7.jpg"
import earphonesImg from "@/assets/home/desktop/image-earphones-yx1.jpg";

const EarphonesSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-0 flex flex-col gap-8 md:gap-10">
      <div className="relative w-full rounded-xl overflow-hidden min-h-[320px] md:min-h-[360px] lg:min-h-[380px] flex items-center">
        <picture className="absolute inset-0 w-full h-full z-0">
          <source media="(min-width:1024px)" srcSet={speakerDesktopImg} />
          <source media="(min-width:640px)" srcSet={speakerTabletImg} />
          <img
            src={speakerMobileImg}
            alt="ZX7 Speaker"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </picture>

        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16">
          <h3 className="text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6 text-neutral-900">
            ZX7 Speaker
          </h3>
          <button className="border-2 border-neutral-900 text-neutral-900 font-bold uppercase tracking-widest px-8 py-3 text-base bg-transparent hover:bg-neutral-900 hover:text-white transition-colors duration-150 cursor-pointer">
            See Product
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-6">
        <div className="flex-1 basis-1/2 min-w-0 rounded-xl overflow-hidden min-h-[200px] md:min-h-[320px]">
          <img
            src={earphonesImg}
            alt="YX1 Earphones"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </div>

        <div className="flex-1 basis-1/2 min-w-0 rounded-xl bg-neutral-100 flex">
          <div className="flex flex-col justify-center items-start w-full px-8 md:px-12 py-12 md:py-0 min-h-[200px] md:min-h-[320px]">
            <h3 className="text-2xl md:text-3xl font-bold tracking-widest uppercase mb-6 text-neutral-900">
              YX1 Earphones
            </h3>
            <button className="border-2 border-neutral-900 text-neutral-900 font-bold uppercase tracking-widest px-8 py-3 text-base bg-transparent hover:bg-neutral-900 hover:text-white transition-colors duration-150 cursor-pointer">
              See Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarphonesSection;