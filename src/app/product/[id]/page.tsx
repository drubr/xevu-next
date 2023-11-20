"use client";

import ProductTabs from "@/components/ProductDetailPage/ProductTabs";
import ProductImageGallery from "@/components/ProductDetailPage/ProductImageGallery";
import ProductBuyConfiguration from "@/components/ProductDetailPage/ProductBuyConfiguration";
import { useUrlState } from "@/hooks/useUrlState";

export default function ProductPage() {
  const { product, variant, thumbnail, tab, setUrl } = useUrlState();

  /**
   * productId is (would) also be accessible from the page's params;
   * Folder name: [id]
   * - export default function ProductDetailPage({ params }: { params: { id: string }}) {...}
   * - const productId: params.id
   * */

  /**
   * Product Detail Domain possibilities
   * http://localhost:3000/product/2?variant=arctic-blue-matt
   * http://localhost:3000/product/2?variant=arctic-blue-matt&thumbnail=3&tab=details
   * http://localhost:3000/product/2/arctic-blue-matt
   * */

  return (
    <div className="mt-4">
      <section className="mx-auto grid w-full max-w-screen-xl items-start gap-8 p-8 lg:grid-cols-[2fr_1fr]">
        <div className="grid gap-8">
          <ProductImageGallery
            product={product}
            variant={variant}
            thumbnail={thumbnail}
            setUrl={setUrl}
          />
          <ProductTabs
            product={product}
            variant={variant}
            tab={tab}
            setUrl={setUrl}
          />
        </div>

        <div className="sticky top-4 grid gap-2">
          <ProductBuyConfiguration product={product} variant={variant} />
        </div>
      </section>
    </div>
  );
}
