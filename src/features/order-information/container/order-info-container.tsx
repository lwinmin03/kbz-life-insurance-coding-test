import { AppForm } from "@/components/core/app-form";

import { OrderInfoSchema, type OrderInfoFormValues } from "../schema/schema";
import OrderInfoForm from "../components/order-info-form";
import OrderSummary from "@/features/cart/components/order-summary";
import { useAppNavigation } from "@/hooks/use-app-navigation";
import { useProductStore } from "@/store/product-store";

const OrderInfoContainer = () => {
  const { goTo } = useAppNavigation();
  const clearCart = useProductStore((state) => state.clearCart);
  const defaultValues: OrderInfoFormValues = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    shiiping: ["free"],
    payment: ["KBZ"],
  };

  const handleSubmit = (data: OrderInfoFormValues) => {
    goTo("/order-success", { state: { order: data } });
    clearCart();
  };

  return (
    <AppForm
      options={{
        defaultValues: defaultValues,
      }}
      onSubmit={handleSubmit}
      schema={OrderInfoSchema}
    >
      <div className="flex justify-between items-start h-full pt-12  gap-x-8">
        <OrderInfoForm />
        <OrderSummary
          label="Buy"
          type="submit"
          onApplyCoupon={(code) => console.log("Coupon applied:", code)}
        />
      </div>
    </AppForm>
  );
};

export default OrderInfoContainer;
