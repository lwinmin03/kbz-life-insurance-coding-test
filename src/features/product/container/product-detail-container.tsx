import { useEffect } from "react";
import { useProductStore } from "@/store/product-store";
import { useGetProductById } from "../api/api";
import ProductDetailLeft from "../components/product-detail-left";
import ProductDetailRight from "../components/product-detail-right";
import { useAppNavigation } from "@/hooks/use-app-navigation";

const ProductDetailContainer = () => {
  const { goTo } = useAppNavigation();
  const product = useGetProductById();

  const setCurrentProduct = useProductStore((state) => state.setCurrentProduct);
  const addToCart = useProductStore((state) => state.addToCart);

  useEffect(() => {
    if (product) {
      setCurrentProduct(product);
    }
  }, [product, setCurrentProduct]);

  if (!product) return null;

  return (
    <div className="mx-auto h-screen flex items-center justify-between">
      <ProductDetailLeft
        onAddToCart={() => {
          addToCart();

          goTo("/cart");
        }}
        name={product.name}
        desc={product.desc}
        price={product.price}
        rating={product.rating}
        reviews={product.reviews}
        maxRating={product.maxRating}
        stock={product.stock}
      />
      <ProductDetailRight thumbnails={product.thumbnails} />
    </div>
  );
};

export default ProductDetailContainer;
