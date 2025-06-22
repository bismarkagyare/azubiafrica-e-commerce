import CategoryHeader from "@/components/shared/CategoryHeader";
import { useProducts } from "@/hooks/useProductFetch";
import ProductShowcaseSection from "@/components/shared/ProductShowcaseSection";
import ProductShowcaseSkeleton from "@/components/loaders/Skeleton";
import CategorySection from "@/components/shared/CategorySection";
import StoreOverviewSection from "@/components/shared/StoreOverviewSection";

const HeadphonesCategory = () => {
  const { data: products, isLoading } = useProducts();

  const xx99MarkII = products?.find((product) => product.slug === "xx99-mark-two-headphones");
  const xx99MarkI = products?.find((product) => product.slug === "xx99-mark-one-headphones");
  const xx59 = products?.find((product) => product.slug === "xx59-headphones");

  if (isLoading) {
    return <ProductShowcaseSkeleton />;
  }

  return (
    <div>
      <CategoryHeader title="Headphones" />
      {xx99MarkII && (
        <ProductShowcaseSection
          title={xx99MarkII.name}
          description={xx99MarkII.description}
          images={{
            mobile: xx99MarkII.categoryImage.mobile,
            tablet: xx99MarkII.categoryImage.tablet,
            desktop: xx99MarkII.categoryImage.desktop,
          }}
          category={xx99MarkII.category}
          isNew={xx99MarkII.new}
        />
      )}
      {xx99MarkI && (
        <ProductShowcaseSection
          title={xx99MarkI.name}
          description={xx99MarkI.description}
          images={{
            mobile: xx99MarkI.categoryImage.mobile,
            tablet: xx99MarkI.categoryImage.tablet,
            desktop: xx99MarkI.categoryImage.desktop,
          }}
          category={xx99MarkI.category}
          isNew={xx99MarkI.new}
          reverse={true}
          withPadding={false}
        />
      )}
      {xx59 && (
        <ProductShowcaseSection
          title={xx59.name}
          description={xx59.description}
          images={{
            mobile: xx59.categoryImage.mobile,
            tablet: xx59.categoryImage.tablet,
            desktop: xx59.categoryImage.desktop,
          }}
          category={xx59.category}
          isNew={xx59.new}
          reverse={false}
        />
      )}
      <CategorySection py="py-16"/>
      <StoreOverviewSection py="py-8" />
    </div>
  );
};

export default HeadphonesCategory;
