import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProductFetch";
import type { RelatedProduct } from "@/types/product";

type RelatedProductsProps = { others: RelatedProduct[] };

const RelatedProducts = ({ others }: RelatedProductsProps) => {
  const { data: products } = useProducts();    
  
  const findCategory = (slug: string) =>
    products?.find((p) => p.slug === slug)?.category ?? "headphones"; 

  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold uppercase text-center mb-12 tracking-wide">
        You May Also Like
      </h2>

      <div className="flex flex-col md:flex-row gap-12 md:gap-6 lg:gap-8 items-center justify-center">
        {others.map((item) => {
          const category = findCategory(item.slug); 

          return (
            <div
              key={item.slug}
              className="flex flex-col items-center text-center w-full md:w-1/3 max-w-xs md:max-w-none"
            >
              <div className="w-full rounded-xl md:aspect-[3/4] lg:aspect-square mb-8 overflow-hidden">
                <picture className="block w-full h-full">
                  <source media="(min-width:1024px)" srcSet={item.image.desktop} />
                  <source media="(min-width:640px)" srcSet={item.image.tablet} />
                  <img src={item.image.mobile} alt={item.name} className="w-full h-full object-cover" />
                </picture>
              </div>

              <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide mb-6">
                {item.name}
              </h3>

              <Link
                to={`/${category}/${item.slug}`} 
                className="bg-primary-orangeish hover:bg-primary-orangeish/80 text-white font-bold uppercase tracking-widest px-8 py-4 text-base transition-colors duration-150"
              >
                See Product
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedProducts;
