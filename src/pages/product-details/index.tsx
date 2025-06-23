import { useParams } from "react-router-dom";
import GallerySection from "./GallerySection";
import ProductInfo from "./ProductInfo";
import ShowcaseSection from "./ShowcaseSection";
import RelatedProducts from "./RelatedProducts";
import { useProducts } from "@/hooks/useProductFetch";
import ProductShowcaseSkeleton from "@/components/loaders/Skeleton";
import CategorySection from "@/components/shared/CategorySection";
import StoreOverviewSection from "@/components/shared/StoreOverviewSection";
import type { Product } from "@/types/product";

const ProductDetails = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const { data: products, isLoading } = useProducts();

  if (isLoading) return <ProductShowcaseSkeleton />;

  const product: Product | undefined = products?.find((p) => p.slug === productSlug);

  if (!product) return <div>Product not found.</div>;

  return (
    <div>
      <ShowcaseSection
        title={product.name}
        description={product.description}
        images={product.image}
        price={product.price}
        isNew={product.new}
        slug={product.slug}
        id={product.id}
      />
      <ProductInfo features={product.features} includes={product.includes} />
      <GallerySection gallery={product.gallery} />
      <RelatedProducts others={product.others} />
      <CategorySection py="py-16" />
      <StoreOverviewSection py="py-8" />
    </div>
  );
};

export default ProductDetails;
