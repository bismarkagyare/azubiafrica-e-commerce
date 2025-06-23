/* eslint-disable react-refresh/only-export-components */
import CategoryHeader from "@/components/shared/CategoryHeader";
import { useProducts } from "@/hooks/useProductFetch";
import ProductShowcaseSection from "@/components/shared/ProductShowcaseSection";
import ProductShowcaseSkeleton from "@/components/loaders/Skeleton";
import CategorySection from "@/components/shared/CategorySection";
import StoreOverviewSection from "@/components/shared/StoreOverviewSection";

export const metadata = {
  title: "Audiophile Shop – Headphones",
};

export default function HeadphonesCategory() {
  const { data: products, isLoading } = useProducts();

  const xx99MarkII = products?.find((p) => p.slug === "xx99-mark-two-headphones");
  const xx99MarkI  = products?.find((p) => p.slug === "xx99-mark-one-headphones");
  const xx59       = products?.find((p) => p.slug === "xx59-headphones");

  return (
    <>
      {isLoading ? (
        <ProductShowcaseSkeleton />
      ) : (
        <div>
          <CategoryHeader title="Headphones" />

          {xx99MarkII && (
            <ProductShowcaseSection
              title={xx99MarkII.name}
              description={xx99MarkII.description}
              images={xx99MarkII.categoryImage}
              category={xx99MarkII.category}
              slug={xx99MarkII.slug}
              isNew={xx99MarkII.new}
            />
          )}

          {xx99MarkI && (
            <ProductShowcaseSection
              title={xx99MarkI.name}
              description={xx99MarkI.description}
              images={xx99MarkI.categoryImage}
              category={xx99MarkI.category}
              slug={xx99MarkI.slug}
              isNew={xx99MarkI.new}
              reverse
              withPadding={false}
            />
          )}

          {xx59 && (
            <ProductShowcaseSection
              title={xx59.name}
              description={xx59.description}
              images={xx59.categoryImage}
              category={xx59.category}
              slug={xx59.slug}
              isNew={xx59.new}
            />
          )}

          <CategorySection py="py-16" />
          <StoreOverviewSection py="py-8" />
        </div>
      )}
    </>
  );
}
