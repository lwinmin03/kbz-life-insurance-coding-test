import React from "react";
import { useFormContext, Controller } from "react-hook-form";

interface FormTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  helperText?: string;
}

export const FormTextArea = ({
  name,
  label,
  helperText,
  className = "",
  rows = 4,
  ...props
}: FormTextAreaProps) => {
  const formContext = useFormContext();

  if (!formContext) {
    console.error(
      `[FormTextArea]: Component with name "${name}" must be wrapped in a <FormProvider>.`,
    );
    return null;
  }

  const { control } = formContext;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col gap-1.5 w-full">
          {label && (
            <label htmlFor={name} className="text-sm font-medium text-gray-700">
              {label}
            </label>
          )}

          <textarea
            {...field}
            {...props}
            id={name}
            rows={rows}
            value={field.value ?? ""}
            className={`border resize-none px-3 text-[#8B8B8B] font-poppins text-base py-2.5 outline-none transition-colors rounded-[1px] ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-[#E2E2E6] focus:border-primary-brand"
            } ${className}`}
          />

          {error && (
            <span className="text-xs text-red-500">{error.message}</span>
          )}

          {!error && helperText && (
            <span className="text-xs text-gray-500">{helperText}</span>
          )}
        </div>
      )}
    />
  );
};

export default FormTextArea;
