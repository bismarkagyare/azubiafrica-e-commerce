import { Helmet } from "react-helmet-async";
import ProductShowcaseSkeleton from "@/components/loaders/Skeleton";
import CategoryHeader from "@/components/shared/CategoryHeader";
import CategorySection from "@/components/shared/CategorySection";
import ProductShowcaseSection from "@/components/shared/ProductShowcaseSection";
import StoreOverviewSection from "@/components/shared/StoreOverviewSection";
import { useProducts } from "@/hooks/useProductFetch";

export default function EarphonesCategory() {
  const { data: products, isLoading } = useProducts();
  const yx1 = products?.find((p) => p.slug === "yx1-earphones");

  return (
    <>
      <Helmet>
        <title>Audiophile Shop – Earphones</title>
      </Helmet>

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
