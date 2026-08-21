import { Tag } from "lucide-react";
import React from "react";

type OrderSummaryProps = {
  type?: "button" | "submit";
  label?: string;
  onApplyCoupon?: (code: string) => void;
  completeOrder?: boolean;
};

const OrderSummary = ({
  label = "Proceed To Checkout",
  type = "submit",
  onApplyCoupon,
  completeOrder = false,
}: OrderSummaryProps) => {
  const [couponCode, setCouponCode] = React.useState("");

  const handleCouponSubmit = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault(); // Prevents main form from submitting
    if (couponCode.trim() && onApplyCoupon) {
      onApplyCoupon(couponCode);
    }
  };

  return (
    <div className="min-w-95 p-8 h-fit border border-[#D1D1D8]">
      <h2 className="font-proxima text-secondary-brand text-2xl font-bold">
        Order Summary
      </h2>

      <div className="flex flex-col mt-6 gap-y-6">
        <div className="flex text-secondary-brand text-base font-normal items-center justify-between">
          <span>Price</span>
          <span>$319.23</span>
        </div>

        <div className="flex items-center justify-between text-secondary-brand text-base font-normal">
          <span>Discount</span>
          <span className="text-green-600">-$31.00</span>
        </div>

        <div className="flex items-center justify-between text-secondary-brand text-base font-normal">
          <span>Shipping</span>
          <span className="text-green-600">Free</span>
        </div>

        <div className="flex items-center justify-between text-secondary-brand text-base font-normal">
          <span>Coupon Applied</span>
          <span>$0.00</span>
        </div>

        <div className="w-full h-px bg-[#D1D1D8]" />
      </div>

      <div className="flex flex-col gap-y-6 mt-4">
        <div className="flex text-secondary-brand text-base font-bold items-center justify-between">
          <span>Total</span>
          <span>$288.23</span>
        </div>

        <div className="flex text-secondary-brand text-base font-normal items-center justify-between">
          <span>Estimated Delivery by</span>
          <span>01 Feb, 2023</span>
        </div>

        {!completeOrder && (
          <div className="rounded-xs border justify-between border-[#D1D1D8] p-3 flex items-center gap-x-2.5 w-full focus-within:border-primary-brand">
            <input
              placeholder="Coupon Code"
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCouponSubmit(e);
              }}
              className="border-none outline-none w-full bg-transparent text-sm"
            />
            <button
              type="button" // Must be type="button" to prevent main form submit
              onClick={handleCouponSubmit}
              className="cursor-pointer text-secondary-brand hover:text-primary-brand shrink-0 transition-colors"
            >
              <Tag size={19} />
            </button>
          </div>
        )}

        <button
          type={type}
          className="bg-primary-brand cursor-pointer py-3 rounded-sm text-base font-poppins font-semibold w-full text-white hover:opacity-90 transition-opacity"
        >
          {label}
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
