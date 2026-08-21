import MainProductImage from "@/assets/product/Meryl_Lounge_Chair_Teal_3 1.png";
import {
  productImageFive,
  productImageFour,
  productImageOne,
  productImageThree,
  productImageTwo,
} from "@/assets/product";
const thumbnails = [
  {
    id: "P-01",
    img: MainProductImage,
  },

  {
    id: "P-02",
    img: productImageTwo,
  },

  {
    id: "P-03",
    img: productImageThree,
  },

  {
    id: "P-04",
    img: productImageFour,
  },

  {
    id: "P-05",
    img: productImageFive,
  },
];

const ProductDetailRight = () => {
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
            const isActive = item?.id === "P-01";
            return (
              <div
                className={`size-26 flex justify-center items-center cursor-pointer  rounded-[5px] border-2 ${isActive ? "border-primary-brand" : "border-cool-grey"} `}
              >
                <img
                  key={item.id}
                  src={item.img}
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
