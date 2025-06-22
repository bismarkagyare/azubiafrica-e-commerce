import type { FC } from "react";

interface ProductShowcaseSkeletonProps {
  reverse?: boolean;
}

const ProductShowcaseSkeleton: FC<ProductShowcaseSkeletonProps> = ({ reverse = false }) => {
  const rowDir = reverse ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <section className="w-full flex justify-center items-center px-4 md:px-6 py-12 md:py-20 bg-transparent">
      <div
        className={`w-full max-w-6xl mx-auto flex flex-col ${rowDir} gap-10 md:gap-16 animate-pulse`}
      >
        <div className="flex-1 w-full rounded-xl overflow-hidden bg-neutral-200 h-[280px] md:h-[380px] lg:h-[560px]" />

        <div className="flex-1 flex flex-col justify-center gap-6">
          <div className="mx-auto lg:mx-0 h-4 w-28 bg-neutral-200 rounded" />
          <div className="mx-auto lg:mx-0 h-8 w-3/4 bg-neutral-300 rounded" />
          <div className="mx-auto lg:mx-0 space-y-3">
            <div className="h-4 w-full bg-neutral-200 rounded" />
            <div className="h-4 w-11/12 bg-neutral-200 rounded" />
            <div className="h-4 w-2/3 bg-neutral-200 rounded" />
          </div>
          <div className="mx-auto lg:mx-0 h-12 w-40 bg-neutral-300 rounded" />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSkeleton;
