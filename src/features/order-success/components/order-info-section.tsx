import type { OrderInfoFormValues } from "@/features/order-information/schema/schema";
import React from "react";

interface OrderInfoColProps {
  name: string;
  value: string;
  className?: string;
}

const OrderInfoCol = ({ name, value, className = "" }: OrderInfoColProps) => {
  return (
    <div className={`flex flex-col gap-y-1 ${className}`}>
      <span className="font-poppins text-black/50 text-xl  font-medium">
        {name}
      </span>
      <span className="font-poppins w-5xl text-black text-xl font-medium line-clamp-2 overflow-hidden text-ellipsis  wrap-break-word">
        {value}
      </span>
    </div>
  );
};

const OrderInfoSection = ({
  name,
  phoneNumber,
  payment,
  address,
  email,
}: OrderInfoFormValues) => {
  return (
    <div className="w-full ">
      <h3 className="text-2xl md:text-[28px] font-semibold font-poppins text-black">
        Order Information
      </h3>

      <div className="w-10/12 mt-2 h-px bg-[#E8E8EB]"></div>

      <div className="mt-6 flex flex-col gap-y-10 justify-between w-full">
        {/* Order Number */}
        <OrderInfoCol name="Order Number" value="008834TVU" />

        {/* 3-Column Alignment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-19">
          <OrderInfoCol name="Name" value={name} />
          <OrderInfoCol name="Email Address" value={email} />
          <OrderInfoCol name="Phone Number" value={phoneNumber} />
        </div>

        {/* 2-Column Alignment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-19">
          <OrderInfoCol name="Shipment" value="Free (Yangon)" />
          <OrderInfoCol
            name="Payment Method"
            value={payment?.[0] === "COD" ? "Cash on delivery" : "KBZ Pay"}
          />
        </div>

        {/* Address Row */}
        <div className="w-full">
          <OrderInfoCol name="Address" value={address} />
        </div>
      </div>
    </div>
  );
};

export default OrderInfoSection;
