import { Helmet } from "react-helmet-async";
import ProductShowcaseSkeleton from "@/components/loaders/Skeleton";
import { useProducts } from "@/hooks/useProductFetch";
import CategoryHeader from "@/components/shared/CategoryHeader";
import ProductShowcaseSection from "@/components/shared/ProductShowcaseSection";
import CategorySection from "@/components/shared/CategorySection";
import StoreOverviewSection from "@/components/shared/StoreOverviewSection";

export default function SpeakersCategory() {
  const { data: products, isLoading } = useProducts();

  const zx9 = products?.find((p) => p.slug === "zx9-speaker");
  const zx7 = products?.find((p) => p.slug === "zx7-speaker");

  return (
    <>
      <Helmet>
        <title>Audiophile Shop – Speakers</title>
      </Helmet>

      {isLoading ? (
        <ProductShowcaseSkeleton />
      ) : (
        <div>
          <CategoryHeader title="Speakers" />

          {zx9 && (
            <ProductShowcaseSection
              title={zx9.name}
              description={zx9.description}
              images={zx9.categoryImage}
              category={zx9.category}
              isNew={zx9.new}
              slug={zx9.slug}
            />
          )}

          {zx7 && (
            <ProductShowcaseSection
              title={zx7.name}
              description={zx7.description}
              images={zx7.categoryImage}
              category={zx7.category}
              reverse
              slug={zx7.slug}
            />
          )}

          <CategorySection py="py-16" />
          <StoreOverviewSection py="py-8" />
        </div>
      )}
    </>
  );
}
