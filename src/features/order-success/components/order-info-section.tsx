import type { OrderInfoFormValues } from "@/features/order-information/schema/schema";
import { formatPhoneNumber } from "@/lib";

interface OrderInfoColProps {
  name: string;
  value: string;
  className?: string;
}

const OrderInfoCol = ({ name, value, className = "" }: OrderInfoColProps) => {
  return (
    <div className={`flex flex-col gap-y-1 w-full ${className}`}>
      <span className="font-poppins text-black/50 text-base md:text-lg font-medium">
        {name}
      </span>
      <span className="font-poppins w-full text-black text-lg md:text-xl font-medium line-clamp-2 overflow-hidden text-ellipsis break-words">
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
    <div className="w-full">
      <h3 className="text-2xl md:text-[28px] xl:text-3xl font-semibold font-poppins text-black">
        Order Information
      </h3>

      <div className="w-full md:w-10/12 xl:w-full mt-2 h-px bg-[#E8E8EB]"></div>

      <div className="mt-6 flex flex-col gap-y-8 md:gap-y-10 xl:gap-y-12 justify-between w-full">
        <OrderInfoCol name="Order Number" value="008834TVU" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
          <OrderInfoCol name="Name" value={name} />
          <OrderInfoCol name="Email Address" value={email} />
          <OrderInfoCol
            name="Phone Number"
            value={formatPhoneNumber(phoneNumber)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
          <OrderInfoCol name="Shipment" value="Free (Yangon)" />
          <OrderInfoCol
            name="Payment Method"
            value={payment?.[0] === "COD" ? "Cash on delivery" : "KBZ Pay"}
          />
        </div>

        <div className="w-full">
          <OrderInfoCol name="Address" value={address} />
        </div>
      </div>
    </div>
  );
};

export default OrderInfoSection;
