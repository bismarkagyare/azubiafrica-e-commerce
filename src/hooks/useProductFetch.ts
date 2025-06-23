import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/axios";
import type { Product } from "@/types/product";
import { queryKeys } from "@/utils/queryKeys";

type ProductsJson = { products: Product[] };

const fetchProducts = async (): Promise<Product[]> => {
  const url = `${import.meta.env.BASE_URL}products.json`;
  const { data } = await api.get<ProductsJson>(url);
  return data.products;
};

export const useProducts = () =>
  useQuery({
    queryKey: [queryKeys.PRODUCTS],
    queryFn: fetchProducts,
    staleTime: 5 * 60 * 1000,
  });
