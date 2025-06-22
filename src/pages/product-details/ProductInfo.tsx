import type { FC } from "react";

type IncludeItem = {
  quantity: number;
  item: string;
};

type ProductInfoProps = {
  features: string;
  includes: IncludeItem[];
};

const ProductInfo: FC<ProductInfoProps> = ({ features, includes }) => {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 md:gap-20 px-4 md:px-6 py-16 md:py-24">
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-bold uppercase mb-8 text-neutral-900 tracking-wide">Features</h3>
        {features.split(/\n+/).map((para, idx) => (
          <p key={idx} className="text-neutral-500 text-sm md:text-base mb-6 last:mb-0 leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      <div className="flex-1 flex flex-col md:gap-0 gap-8">
        <h3 className="text-2xl md:text-3xl font-bold uppercase mb-6 md:mb-8 text-neutral-900 tracking-wide md:flex md:justify-between md:items-center">
          <span>In the Box</span>
        </h3>
        <ul className="flex flex-col gap-3">
          {includes.map((inc, idx) => (
            <li key={idx} className="flex items-baseline gap-4 md:gap-6">
              <span className="text-primary-orangeish font-bold text-base md:text-lg min-w-[2.5em]">{inc.quantity}x</span>
              <span className="text-neutral-500 text-sm md:text-base">{inc.item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductInfo;
