import ProductShowcaseSkeleton from "@/components/loaders/Skeleton";
import CategoryHeader from "@/components/shared/CategoryHeader";
import CategorySection from "@/components/shared/CategorySection";
import ProductShowcaseSection from "@/components/shared/ProductShowcaseSection";
import StoreOverviewSection from "@/components/shared/StoreOverviewSection";
import { useProducts } from "@/hooks/useProductFetch";

const EarphonesCategory = () => {
  const { data: products, isLoading } = useProducts();

  const yx1 = products?.find((product) => product.slug === "yx1-earphones");

  if (isLoading) {
    return <ProductShowcaseSkeleton />;
  }

  return (
    <div>
      <CategoryHeader title="Earphones" />
      {yx1 && (
        <ProductShowcaseSection
          title={yx1.name}
          description={yx1.description}
          images={{
            mobile: yx1.categoryImage.mobile,
            tablet: yx1.categoryImage.tablet,
            desktop: yx1.categoryImage.desktop,
          }}
          category={yx1.category}
          isNew={yx1.new}
        />
      )}
      <CategorySection py="py-16" />
      <StoreOverviewSection py="py-8" />
    </div>
  );
};

export default EarphonesCategory;
