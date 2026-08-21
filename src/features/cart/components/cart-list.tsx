import { Percent } from "lucide-react";
import CartItem from "./cart-item";

const CartList = () => {
  return (
    <div className="w-full flex flex-col gap-y-8">
      <div className="flex items-baseline gap-x-4">
        <h3 className="font-bold text-secondary-brand text-[32px]">Cart</h3>
        <span className="text-[20px] font-semibold text-cool-grey">
          2 ITEMS
        </span>
      </div>

      {/* Cart items */}
      <CartItem />

      <div className="w-fit flex items-center gap-x-4  rounded-[1px] p-4 border border-primary-brand bg-primary-brand/10">
        <Percent className="text-primary-brand" />
        <div className="text-base font-normal font-proxima">
          10% Instant Discount with Federal Bank Debit Cards on a min spend of
          $150. TCA
        </div>
      </div>
    </div>
  );
};

export default CartList;
