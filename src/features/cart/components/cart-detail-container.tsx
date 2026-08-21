import CartList from "./cart-list";
import OrderSummary from "./order-summary";

const CartDetailContainer = () => {
  return (
    <div className="flex w-full items-start  justify-between gap-x-12 pt-20 ">
      <CartList />
      <OrderSummary />
    </div>
  );
};

export default CartDetailContainer;
