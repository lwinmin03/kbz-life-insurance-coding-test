import CartList from "./cart-list";
import OrderSummary from "./order-summary";
import { useAppNavigation } from "@/hooks/use-app-navigation";

const CartDetailContainer = () => {
  const { goTo } = useAppNavigation();

  return (
    <div className="flex w-full items-start  justify-between gap-x-12 pt-20 ">
      <CartList />
      <OrderSummary type="button" onClick={() => goTo("/order-information")} />
    </div>
  );
};

export default CartDetailContainer;
