import { MainProduct } from "@/assets/product";
import { useProductStore } from "@/store/product-store";
import { Minus, Plus } from "lucide-react";

interface CartItemProps {
  id: number;
  name: string;
  quantity: number;
  price: number;
  stock: number;
  onRemove: () => void;
}

const CartItem = ({
  id,
  name,
  quantity,
  price,
  stock,
  onRemove,
}: CartItemProps) => {
  const updateQuantity = useProductStore((state) => state.updateQuantity);

  const handleIncrement = () => {
    if (quantity < stock) {
      updateQuantity(id, quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const itemTotal = (price * quantity).toFixed(2);

  return (
    <div className="mt-6 flex w-11/12 justify-between items-start border-b border-b-[#D1D1D8] pb-6">
      <div className="flex gap-x-6 font-poppins">
        <img src={MainProduct} alt={name} className="size-40 object-cover" />

        <div className="flex flex-col gap-y-3.5 font-poppins">
          <h4 className="text-secondary-brand font-poppins text-[20px] font-semibold">
            {name}
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
            <div className="border border-cool-grey px-4 py-3 rounded-sm flex items-center justify-between w-40 h-full">
              <button
                disabled={quantity <= 1}
                onClick={handleDecrement}
                type="button"
                className="text-secondary-brand cursor-pointer flex items-center justify-center p-1 hover:opacity-75 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>

              <span className="font-poppins text-secondary-brand text-base font-semibold select-none">
                {quantity}
              </span>

              <button
                disabled={quantity >= stock}
                onClick={handleIncrement}
                type="button"
                className="text-secondary-brand cursor-pointer flex items-center justify-center p-1 hover:opacity-75 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={onRemove}
              type="button"
              className="font-poppins cursor-pointer text-[#E14B4B] font-semibold text-base"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="text-[20px] font-semibold">${itemTotal}</div>
    </div>
  );
};

export default CartItem;
