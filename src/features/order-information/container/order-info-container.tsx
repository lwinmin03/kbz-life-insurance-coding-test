import { AppForm } from "@/components/core/app-form";

import { OrderInfoSchema, type OrderInfoFormValues } from "../schema/schema";
import OrderInfoForm from "../components/order-info-form";
import OrderSummary from "@/features/cart/components/order-summary";
import { useNavigate } from "react-router-dom";

const OrderInfoContainer = () => {
  const navigate = useNavigate();
  const defaultValues: OrderInfoFormValues = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    shiiping: ["free"],
    payment: ["KBZ"],
  };

  const handleSubmit = (data: OrderInfoFormValues) => {
    console.log("Submitted Order:", data);

    navigate("/order-success", { state: { order: data } });
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
