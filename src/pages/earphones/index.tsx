/* eslint-disable react-refresh/only-export-components */
import ProductShowcaseSkeleton from "@/components/loaders/Skeleton";
import CategoryHeader from "@/components/shared/CategoryHeader";
import CategorySection from "@/components/shared/CategorySection";
import ProductShowcaseSection from "@/components/shared/ProductShowcaseSection";
import StoreOverviewSection from "@/components/shared/StoreOverviewSection";
import { useProducts } from "@/hooks/useProductFetch";

export const metadata = {
  title: "Audiophile Shop – Earphones",
};

export default function EarphonesCategory() {
  const { data: products, isLoading } = useProducts();
  const yx1 = products?.find((p) => p.slug === "yx1-earphones");

  return (
    <>
      {isLoading ? (
        <ProductShowcaseSkeleton />
      ) : (
        <div>
          <CategoryHeader title="Earphones" />

          {yx1 && (
            <ProductShowcaseSection
              title={yx1.name}
              description={yx1.description}
              images={yx1.categoryImage}
              category={yx1.category}
              isNew={yx1.new}
              slug={yx1.slug}
            />
          )}

          <CategorySection py="py-16" />
          <StoreOverviewSection py="py-8" />
        </div>
      )}
    </>
  );
}
