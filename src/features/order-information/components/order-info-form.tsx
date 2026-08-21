import FormInput from "@/components/common/form-input";
import { FormRadioOption } from "@/components/common/form-radio-option";
import FormTextArea from "@/components/common/form-textarea";

const OrderInfoForm = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h3 className="font-poppins font-bold text-2xl">Personal information</h3>
      <div className="flex items-center gap-x-3">
        <FormInput className="mt-2" name="name" placeholder="Name" />
        <FormInput className="mt-2" name="email" placeholder="Email Address" />
      </div>
      <FormInput
        className="mt-2"
        name="phoneNumber"
        placeholder="Phone Number"
      />
      <FormTextArea name="address" placeholder="Address" className="mt-2" />

      <div className="mt-4">
        <h4 className="mb-6 font-poppins font-semibold text-secondary-brand">
          Shipping Method
        </h4>
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

      <div className="mt-4">
        <h4 className="mb-6 font-poppins font-semibold text-secondary-brand">
          Payment Method
        </h4>
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
          subtitle="Digital Payment "
        />
      </div>
    </div>
  );
};

export default OrderInfoForm;
