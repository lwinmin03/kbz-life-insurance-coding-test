import MainProductImage from "@/assets/product/Meryl_Lounge_Chair_Teal_3 1.png";
import type { Product } from "../api/api";
interface ProductDetailRightProps extends Pick<Product, "thumbnails"> {}

const ProductDetailRight = ({ thumbnails }: ProductDetailRightProps) => {
  return (
    <div className="min-h-160 flex flex-col gap-3.5">
      <img
        src={MainProductImage}
        alt="Main Product"
        className="w-full  object-cover"
      />

      <div className="flex flex-col gap-1.5 justify-center">
        <div className="flex items-center justify-s">
          <span className="text-secondary-brand text-[32px] font-bold">01</span>
          <span className="font-poppins text-cool-grey text-2xl font-semibold">
            /
          </span>
          <span className="font-poppins text-cool-grey text-2xl font-semibold">
            05
          </span>
        </div>

        {/* thumbnails */}
        <div className="flex w-full items-center justify-start gap-x-6">
          {thumbnails.map((item) => {
            const isActive = item?.id === "T-01";
            return (
              <div
                className={`size-26 flex justify-center items-center cursor-pointer  rounded-[5px] border-2 ${isActive ? "border-primary-brand" : "border-cool-grey"} `}
              >
                <img
                  key={item.id}
                  src={item.url}
                  className="size-22  object-contain"
                  alt={`Thumbnail ${item.id}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailRight;
