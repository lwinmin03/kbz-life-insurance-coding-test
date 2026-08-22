import MainProductImage from "@/assets/product/Meryl_Lounge_Chair_Teal_3 1.png";
import type { Product } from "../api/api";

interface ProductDetailRightProps extends Pick<Product, "thumbnails"> {}

const ProductDetailRight = ({ thumbnails }: ProductDetailRightProps) => {
  return (
    <div className="w-full lg:w-6/12 flex flex-col gap-3.5 items-center lg:items-start">
      <div className="w-full max-w-lg lg:max-w-none">
        <img
          src={MainProductImage}
          alt="Main Product"
          className="w-full h-auto max-h-[500px] object-contain rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-1.5 w-full justify-center">
        <div className="flex items-center justify-start gap-1">
          <span className="text-secondary-brand text-[32px] font-bold">01</span>
          <span className="font-poppins text-cool-grey text-2xl font-semibold">
            /
          </span>
          <span className="font-poppins text-cool-grey text-2xl font-semibold">
            05
          </span>
        </div>

        {/* thumbnails */}
        <div className="flex w-full items-center justify-start gap-x-4 md:gap-x-6 overflow-x-auto pb-2">
          {thumbnails.map((item) => {
            const isActive = item?.id === "T-01";
            return (
              <div
                key={item.id}
                className={`size-20 md:size-26 shrink-0 flex justify-center items-center cursor-pointer rounded-[5px] border-2 ${
                  isActive ? "border-primary-brand" : "border-cool-grey"
                }`}
              >
                <img
                  src={item.url}
                  className="size-16 md:size-22 object-contain"
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
