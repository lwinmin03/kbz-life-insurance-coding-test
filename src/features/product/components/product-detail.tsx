import ProductDetailLeft from "./product-detail-left";
import ProductDetailRight from "./product-detail-right";

const ProductDetail = () => {
  return (
    <div className="w-[92%] mx-auto  h-screen flex items-center justify-between ">
      <ProductDetailLeft
        productName="Meryl Lounge Chair"
        desc="The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs."
        price={149.99}
        rating={4.6}
        totalRatingUser={556}
      />
      <ProductDetailRight />
    </div>
  );
};

export default ProductDetail;
