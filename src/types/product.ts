export interface ImageSet {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IncludedItem {
  quantity: number;
  item: string;
}

export interface ProductGallery {
  first: ImageSet;
  second: ImageSet;
  third: ImageSet;
}

export interface RelatedProduct {
  slug: string;
  name: string;
  image: ImageSet;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: ImageSet;
  category: string;
  categoryImage: ImageSet;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: ProductGallery;
  others: RelatedProduct[];
}
