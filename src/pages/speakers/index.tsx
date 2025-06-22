import ProductShowcaseSkeleton from "@/components/loaders/Skeleton";
import { useProducts } from "@/hooks/useProductFetch";
import CategoryHeader from "@/components/shared/CategoryHeader";
import ProductShowcaseSection from "@/components/shared/ProductShowcaseSection";
import CategorySection from "@/components/shared/CategorySection";
import StoreOverviewSection from "@/components/shared/StoreOverviewSection";

const SpeakersCategory = () => {
  const { data: products, isLoading } = useProducts();

  const zx9 = products?.find((product) => product.slug === "zx9-speaker");
  const zx7 = products?.find((product) => product.slug === "zx7-speaker");

  if (isLoading) {
    return <ProductShowcaseSkeleton />;
  }

  return (
    <div>
      <CategoryHeader title="Speakers" />
      {zx9 && (
        <ProductShowcaseSection
          title={zx9.name}
          description={zx9.description}
          images={{
            mobile: zx9.categoryImage.mobile,
            tablet: zx9.categoryImage.tablet,
            desktop: zx9.categoryImage.desktop,
          }}
          category={zx9.category}
          isNew={zx9.new}
          slug={zx9.slug}
        />
      )}
      {zx7 && (
        <ProductShowcaseSection
          title={zx7.name}
          description={zx7.description}
          images={{
            mobile: zx7.categoryImage.mobile,
            tablet: zx7.categoryImage.tablet,
            desktop: zx7.categoryImage.desktop,
          }}
          category={zx7.category}
          reverse={true}
          slug={zx7.slug}
        />
      )}
      <CategorySection py="py-16" />
      <StoreOverviewSection py="py-8" />
    </div>
  );
};

export default SpeakersCategory;
