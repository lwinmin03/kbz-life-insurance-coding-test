import FormInput from "@/components/common/form-input";
import { FormRadioOption } from "@/components/common/form-radio-option";
import FormTextArea from "@/components/common/form-textarea";

const OrderInfoForm = () => {
  return (
    <div className="w-full lg:flex-1 flex flex-col gap-2">
      <h3 className="font-poppins font-bold text-2xl">Personal information</h3>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <FormInput className="mt-2 w-full" name="name" placeholder="Name" />
        <FormInput
          className="mt-2 w-full"
          name="email"
          placeholder="Email Address"
        />
      </div>

      <FormInput
        className="mt-2"
        name="phoneNumber"
        placeholder="Phone Number"
      />
      <FormTextArea name="address" placeholder="Address" className="mt-2" />

      <div className="mt-4">
        <h4 className="mb-4 font-poppins font-semibold text-secondary-brand">
          Shipping Method
        </h4>
        <div className="flex flex-col gap-y-2">
          <FormRadioOption
            name="shiiping"
            value="free"
            title="Free"
            subtitle="Yangon"
          />
          <FormRadioOption
            name="shiiping"
            value="paid"
            title="$8.50"
            subtitle="Mandalay"
          />
        </div>
      </div>

      <div className="mt-4">
        <h4 className="mb-4 font-poppins font-semibold text-secondary-brand">
          Payment Method
        </h4>
        <div className="flex flex-col gap-y-2">
          <FormRadioOption
            name="payment"
            value="COD"
            title="Cash on delivery"
            subtitle="Regular payment"
          />
          <FormRadioOption
            name="payment"
            value="KBZ"
            title="KBZ PAY"
            subtitle="Digital Payment"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderInfoForm;
