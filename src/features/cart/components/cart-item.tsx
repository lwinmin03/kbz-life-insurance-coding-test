import { MainProduct } from "@/assets/product";
import { Minus, Plus } from "lucide-react";

const CartItem = () => {
  return (
    <div className="flex mt-6 justify-between items-start border-b border-b-[#D1D1D8] w-11/12">
      <div className="flex font-poppins">
        <img src={MainProduct} className="size-40 object-cover" />

        <div className="flex flex-col gap-y-3.5 font-poppins ">
          <h4 className="text-secondary-brand font-poppins text-[20px] font-semibold">
            Meryl Lounge Chair
          </h4>
          <div className="flex items-center gap-x-3.5">
            <span className="text-cool-grey font-semibold text-base">
              Color
            </span>
            <span className="font-semibold text-base text-secondary-brand">
              Lysed bright green
            </span>
          </div>

          <div className="flex items-center gap-x-3.5">
            <div className="border border-cool-grey px-4 py-4.5 rounded-sm flex items-center justify-between w-36 h-full">
              <button
                type="button"
                className="text-secondary-brand cursor-pointer flex items-center justify-center p-1 hover:opacity-75 transition-opacity"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>

              <span className="font-poppins text-secondary-brand text-base font-semibold select-none">
                {1}
              </span>

              <button
                type="button"
                className="text-secondary-brand cursor-pointer flex items-center justify-center p-1 hover:opacity-75 transition-opacity"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>

            <button
              type="button"
              className="font-poppins cursor-pointer text-[#E14B4B] font-semibold text-base"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="text-[20px] font-semibold">$2033</div>
    </div>
  );
};

export default CartItem;
