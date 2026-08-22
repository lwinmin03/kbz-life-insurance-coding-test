import OrderSummary from "@/features/cart/components/order-summary";
import OrderInfoSection from "./order-info-section";
import { Navigate, useLocation } from "react-router-dom";

const OrderSuccessDetail = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="w-full flex flex-col gap-y-6">
      <div className="bg-primary-brand/13 py-4 px-5 mt-8 text-primary-brand text-2xl font-poppins font-medium rounded-[7px]">
        Order create successfully!
      </div>
      <div className="flex mt-4 w-full items-start justify-center">
        <OrderInfoSection
          address={order?.address}
          email={order?.email}
          payment={order?.payment}
          phoneNumber={order?.phoneNumber}
          shiiping={order?.shiiping}
          name={order?.name}
        />
        <OrderSummary label="Save Gallery" completeOrder={true} />
      </div>
    </div>
  );
};

export default OrderSuccessDetail;
