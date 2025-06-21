import speakerImg from "@/assets/home/desktop/image-speaker-zx9.png";
import patternCircles from "@/assets/home/desktop/pattern-circles.svg";

const SpeakerSection = () => {
  return (
    <section className="w-full flex justify-center items-center px-4 md:px-6 pb-16 bg-transparent">
      <div className="relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden bg-primary-orangeish flex flex-col lg:flex-row items-center lg:items-stretch px-6 md:px-10 lg:px-24 py-12 md:py-20 md:gap-12">
        <img
          src={patternCircles}
          alt="Decorative circles"
          className="absolute left-1/2 top-0 -translate-x-1/2 lg:-translate-x-1/3 lg:left-0 lg:top-1/2 lg:-translate-y-1/2 w-[600px] md:w-[800px] lg:w-[900px] h-auto pointer-events-none select-none z-0 opacity-60"
          aria-hidden="true"
        />

        <div className="relative z-10 flex justify-center items-end w-full lg:w-1/2 min-h-[280px] md:min-h-[400px] lg:min-h-[500px]">
          <img
            src={speakerImg}
            alt="ZX9 Speaker"
            className="w-48 md:w-80 lg:w-[360px] h-auto object-contain drop-shadow-2xl md:scale-110"
            draggable={false}
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 mt-10 lg:mt-0">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest uppercase mb-6 leading-tight">
            ZX9 <br className="hidden md:block" /> Speaker
          </h2>
          <p className="text-white text-base md:text-lg opacity-80 mb-8 max-w-md">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <button className="bg-neutral-900 hover:bg-neutral-700 text-white font-bold uppercase tracking-widest px-8 py-4 text-base rounded-none transition-colors duration-150 cursor-pointer">
            See Product
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
