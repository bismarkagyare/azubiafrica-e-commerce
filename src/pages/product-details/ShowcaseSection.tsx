import { useState } from "react";
import type { FC } from "react";
import { useCart } from "@/hooks/useCart";
import { toast } from "react-toastify";

type ShowcaseSectionProps = {
  id: number;
  slug: string;
  title: string;
  description: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  price: number;
  isNew?: boolean;
};

const ShowcaseSection: FC<ShowcaseSectionProps> = ({ id, slug, title, description, images, price, isNew = false }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));
  const handleIncrease = () => setQuantity((q) => q + 1);

  const handleAddToCart = () => {
    addToCart(
      {
        id,
        slug,
        name: title,
        price,
        image: images,
      },
      quantity
    );
    toast.success("Added to cart", { position: "top-center" });
  };

  return (
    <section className="w-full flex justify-center items-center px-4 md:px-6 py-10 md:py-16">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="flex-1 w-full rounded-xl overflow-hidden">
          <picture className="block w-full">
            <source media="(min-width:1024px)" srcSet={images.desktop} />
            <source media="(min-width:640px)" srcSet={images.tablet} />
            <img src={images.mobile} alt={title} className="w-full h-full object-cover rounded-xl" draggable={false} />
          </picture>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6">
          {isNew && (
            <span className="text-sm tracking-[0.7em] text-primary-orangeish uppercase font-medium">New Product</span>
          )}

          <h2 className="text-3xl md:text-4xl font-bold uppercase text-neutral-900 leading-tight">{title}</h2>

          <p className="text-neutral-500 text-base md:text-lg max-w-lg">{description}</p>

          <span className="text-lg md:text-xl font-bold text-neutral-900">$ {price}</span>

          <div className="flex flex-row gap-4 w-full max-w-xs sm:max-w-none sm:w-auto justify-center md:justify-start">
            <div className="flex items-center bg-neutral-100 overflow-hidden h-12 sm:h-14">
              <button
                className="w-10 sm:w-12 h-full flex items-center justify-center text-neutral-400 text-xl sm:text-2xl font-bold hover:text-primary-orangeish transition-colors cursor-pointer"
                onClick={handleDecrease}
                aria-label="Decrease quantity"
                type="button"
              >
                -
              </button>
              <span className="w-10 text-center text-base sm:text-lg font-semibold select-none">{quantity}</span>
              <button
                className="w-10 sm:w-12 h-full flex items-center justify-center text-neutral-400 text-xl sm:text-2xl font-bold hover:text-primary-orangeish transition-colors cursor-pointer"
                onClick={handleIncrease}
                aria-label="Increase quantity"
                type="button"
              >
                +
              </button>
            </div>

            <button
              className="flex-1 bg-primary-orangeish hover:bg-primary-orangeish/80 text-white font-bold uppercase cursor-pointer tracking-widest
                        px-4 py-3 text-sm
                        sm:px-6 sm:py-3 sm:text-[12px]
                        md:px-8 md:py-4
                        transition-colors duration-150 min-w-[120px] sm:min-w-[140px] md:min-w-[160px]"
              type="button"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
