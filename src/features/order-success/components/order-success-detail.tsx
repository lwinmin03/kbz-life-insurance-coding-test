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
    <div className="container mx-auto w-full max-w-full xl:max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] flex flex-col gap-y-6 px-4 md:px-8 lg:px-12 py-8 lg:py-12">
      <div className="bg-primary-brand/13 py-4 px-5 text-primary-brand text-xl md:text-2xl font-poppins font-medium rounded-[7px]">
        Order created successfully!
      </div>

      <div className="flex flex-col lg:flex-row mt-4 w-full items-start justify-between gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
        <div className="w-full lg:w-[60%] xl:w-[62%] 2xl:w-[65%] shrink-0">
          <OrderInfoSection
            address={order?.address}
            email={order?.email}
            payment={order?.payment}
            phoneNumber={order?.phoneNumber}
            shiiping={order?.shiiping}
            name={order?.name}
          />
        </div>
        <div className="w-full lg:w-[38%] xl:w-[35%] 2xl:w-[32%] shrink-0">
          <OrderSummary label="Save Gallery" completeOrder={true} />
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessDetail;
