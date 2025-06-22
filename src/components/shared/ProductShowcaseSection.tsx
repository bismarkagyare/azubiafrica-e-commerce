import type { FC } from "react";
import { useNavigate } from "react-router-dom";

type ProductShowcaseSectionProps = {
  title: string;
  description: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  isNew?: boolean;
  reverse?: boolean;
  buttonText?: string;
  className?: string;
  withPadding?: boolean;
};

const ProductShowcaseSection: FC<ProductShowcaseSectionProps> = ({
  title,
  description,
  images,
  category,
  isNew = false,
  reverse = false,
  buttonText = "See Product",
  className = "",
  withPadding = true,
}) => {
  const navigate = useNavigate();

  const rowDir = reverse ? "lg:flex-row-reverse" : "lg:flex-row";
  const defaultPadding = withPadding ? "py-12 md:py-20" : "";

  return (
    <section
      className={`w-full flex justify-center items-center px-4 md:px-6 bg-transparent ${defaultPadding} ${className} ${withPadding}`}
    >
      <div
        className={`w-full max-w-6xl mx-auto overflow-hidden flex flex-col ${rowDir} items-center gap-10 md:gap-16`}
      >
        <div className="flex-1 w-full rounded-xl overflow-hidden">
          <picture className="block w-full">
            <source media="(min-width:1024px)" srcSet={images.desktop} />
            <source media="(min-width:640px)" srcSet={images.tablet} />
            <img
              src={images.mobile}
              alt={title}
              className="w-full h-full object-cover rounded-xl"
              draggable={false}
            />
          </picture>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6">
          {isNew && (
            <span className="text-sm tracking-[0.7em] text-primary-orangeish mb-2 uppercase font-medium">
              New Product
            </span>
          )}
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold uppercase text-neutral-900 mb-2">{title}</h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-lg mb-4">{description}</p>
          <button
            className="bg-primary-orangeish hover:bg-primary-orangeish/80 text-white font-bold uppercase tracking-widest px-8 py-4 text-base rounded-none transition-colors duration-150 cursor-pointer"
            onClick={() => navigate(`/${category}`)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;
