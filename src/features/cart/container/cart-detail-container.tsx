import CartList from "../components/cart-list";
import OrderSummary from "../components/order-summary";
import { useAppNavigation } from "@/hooks/use-app-navigation";

const CartDetailContainer = () => {
  const { goTo } = useAppNavigation();

  return (
    <div className="container mx-auto flex flex-col lg:flex-row w-full items-start justify-between gap-8 lg:gap-12 px-4 md:px-8 py-8 lg:py-16">
      <CartList />
      <OrderSummary type="button" onClick={() => goTo("/order-information")} />
    </div>
  );
};

export default CartDetailContainer;
