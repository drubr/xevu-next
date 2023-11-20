import { usePathname } from "next/navigation";
import { useGetAllSearchParams } from "@/hooks/useGetAllSearchParams";
import { useGetProduct } from "@/hooks/useGetProduct";
import { useGetProductVariant } from "@/hooks/useGetProductVariant";
import { useSetSearchParam } from "@/hooks/useSetSearchParam";

/** Use this hook if you want to read the state of a page based on the URL */
export const useUrlState = () => {
  const pathname = usePathname();
  const searchParams = useGetAllSearchParams();
  const productId =
    pathname.split("/")[pathname.split("/").indexOf("product") + 1];
  const { setURL } = useSetSearchParam();

  return {
    pathname: pathname,
    searchParams: searchParams,
    productId: productId,
    product: useGetProduct(productId),
    variant: useGetProductVariant(productId),
    thumbnail: searchParams.find((param) => param.key === "thumbnail")?.value,
    tab: searchParams.find((param) => param.key === "tab")?.value,
    setUrl: setURL,
  };
};
