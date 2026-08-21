import { useFormContext, Controller } from "react-hook-form";

export interface RadioOptionProps {
  name: string;
  value: string;
  title: string;
  subtitle?: string;
}

export const FormRadioOption = ({
  name,
  value,
  title,
  subtitle,
}: RadioOptionProps) => {
  const formContext = useFormContext();

  if (!formContext) {
    console.error(
      `[FormInput]: Component with name "${name}" must be wrapped in a <FormProvider>.`,
    );
    return null;
  }

  const { control } = formContext;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const isChecked = Array.isArray(field.value)
          ? field.value.includes(value)
          : field.value === value;

        return (
          <label
            className="flex items-center gap-3 py-4.5 border px-4 border-[#D1D1D8] cursor-pointer select-none group"
            onClick={() => field.onChange([value])}
          >
            {/* Custom Teal Radio Button */}
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                isChecked
                  ? "border-[#319795]"
                  : "border-gray-300 group-hover:border-gray-400"
              }`}
            >
              {isChecked && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#319795]" />
              )}
            </div>

            {/* Title & Optional Subtitle */}
            <div className="flex items-center gap-2 ">
              <span className="font-semibold font-poppins text-base">
                {title}
              </span>
              {subtitle && (
                <span className="font-poppins text-base font-normal">
                  {subtitle}
                </span>
              )}
            </div>
          </label>
        );
      }}
    />
  );
};
