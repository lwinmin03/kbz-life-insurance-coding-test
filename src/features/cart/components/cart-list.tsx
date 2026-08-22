import { Percent, ShoppingBag } from "lucide-react";
import CartItem from "./cart-item";
import { useProductStore } from "@/store/product-store";

const CartList = () => {
  const cart = useProductStore((state) => state.cart);
  const onRemove = useProductStore((state) => state.removeFromCart);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="w-full flex flex-col gap-y-8">
      <div className="flex items-baseline gap-x-4">
        <h3 className="font-bold text-secondary-brand text-[32px]">Cart</h3>
        <span className="text-[20px] font-semibold text-cool-grey uppercase">
          {totalItems} {totalItems === 1 ? "ITEM" : "ITEMS"}
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 border border-dashed border-[#D1D1D8] rounded-md text-center">
          <ShoppingBag className="size-12 text-cool-grey mb-4" />
          <h4 className="text-xl font-semibold text-secondary-brand font-poppins">
            Your cart is empty
          </h4>
          <p className="text-cool-grey text-base mt-1 font-poppins">
            Looks like you haven't added anything to your cart yet.
          </p>
        </div>
      ) : (
        <>
          {/* Cart Items List */}
          <div className="flex flex-col">
            {cart.map((item) => (
              <CartItem
                key={item.product.id}
                id={item.product.id}
                price={item.product.price}
                stock={item.product.stock}
                name={item.product.name}
                onRemove={() => onRemove(item.product.id)}
                quantity={item.quantity}
              />
            ))}
          </div>

          <div className="w-fit flex items-center gap-x-4 rounded-[1px] p-4 border border-primary-brand bg-primary-brand/10">
            <Percent className="text-primary-brand shrink-0" />
            <div className="text-base font-normal font-proxima">
              10% Instant Discount with Federal Bank Debit Cards on a min spend
              of $150. TCA
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartList;
