import type { FC } from "react";

type GalleryImage = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type GallerySectionProps = {
  gallery: {
    first: GalleryImage;
    second: GalleryImage;
    third: GalleryImage;
  };
};

const GallerySection: FC<GallerySectionProps> = ({ gallery }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
        <div className="grid grid-rows-2 gap-6 md:gap-8 h-full md:col-span-2">
          <div className="rounded-xl overflow-hidden bg-neutral-100 h-[200px] md:h-full">
            <picture className="block w-full h-full">
              <source media="(min-width:1024px)" srcSet={gallery.first.desktop} />
              <source media="(min-width:640px)" srcSet={gallery.first.tablet} />
              <img
                src={gallery.first.mobile}
                alt="Gallery image 1"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </picture>
          </div>
          <div className="rounded-xl overflow-hidden bg-neutral-100 h-[200px] md:h-full">
            <picture className="block w-full h-full">
              <source media="(min-width:1024px)" srcSet={gallery.second.desktop} />
              <source media="(min-width:640px)" srcSet={gallery.second.tablet} />
              <img
                src={gallery.second.mobile}
                alt="Gallery image 2"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </picture>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden bg-neutral-100 h-[424px] md:h-full md:col-span-3">
          <picture className="block w-full h-full">
            <source media="(min-width:1024px)" srcSet={gallery.third.desktop} />
            <source media="(min-width:640px)" srcSet={gallery.third.tablet} />
            <img
              src={gallery.third.mobile}
              alt="Gallery image 3"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
