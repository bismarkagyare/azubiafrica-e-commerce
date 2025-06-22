import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import headphonesImg from "@/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "@/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "@/assets/shared/desktop/image-category-thumbnail-earphones.png";

const categories = [
  { name: "Headphones", image: headphonesImg, alt: "Headphones", link: "/headphones" },
  { name: "Speakers", image: speakersImg, alt: "Speakers", link: "/speakers" },
  { name: "Earphones", image: earphonesImg, alt: "Earphones", link: "/earphones" },
];

type CategoryCardProps = {
  name: string;
  image: string;
  alt: string;
  link: string;
};

const CategoryCard = ({ name, image, alt, link }: CategoryCardProps) => (
  <Link
    to={link}
    className="relative flex flex-col items-center bg-neutral-100 rounded-xl pt-16 pb-8 px-6 shadow-sm w-full max-w-xs mx-auto overflow-visible focus-visible:ring-2 focus-visible:ring-primary-orangeish/60 focus-visible:outline-none group"
  >
    <img
      src={image}
      alt={alt}
      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-32 h-32 object-contain drop-shadow-lg pointer-events-none select-none"
      draggable={false}
      style={{ zIndex: 1 }}
    />

    <div className="h-12" />
    <h3 className="text-lg font-bold tracking-widest uppercase mb-4 text-neutral-900">{name}</h3>

    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold tracking-widest text-neutral-500 group-hover:text-primary-orangeish transition-colors uppercase">
        Shop
      </span>
      <ChevronRight className="w-5 h-5 text-primary-orangeish group-hover:translate-x-1 transition-transform" />
    </div>
  </Link>
);

const CategoriesSection = ({ py = "py-32" }: { py?: string }) => (
  <section className={`w-full bg-white ${py}`}>
    <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-16 md:gap-6 lg:gap-10 justify-center items-center">
      {categories.map((cat) => (
        <CategoryCard key={cat.name} {...cat} />
      ))}
    </div>
  </section>
);

export default CategoriesSection;
