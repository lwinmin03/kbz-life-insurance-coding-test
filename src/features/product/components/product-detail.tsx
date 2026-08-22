import { useNavigate } from "react-router-dom";
import ProductDetailLeft from "./product-detail-left";
import ProductDetailRight from "./product-detail-right";

const ProductDetail = () => {
  const navigate = useNavigate();

  return (
    <div className=" mx-auto  h-screen flex items-center justify-between ">
      <ProductDetailLeft
        onAddToCart={() => {
          navigate("/cart");
        }}
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
