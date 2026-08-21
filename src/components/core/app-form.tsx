import React from "react";
import {
  type FieldValues,
  type UseFormProps,
  type SubmitHandler,
  FormProvider,
} from "react-hook-form";
import type { z, ZodType } from "zod";
import { useAppForm } from "@/hooks/use-app-form";

export interface AppFormProps<T extends ZodType<FieldValues, any, any>> {
  schema: T;
  options?: Omit<UseFormProps<z.input<T>, any, z.output<T>>, "resolver">;
  onSubmit: SubmitHandler<z.output<T>>;
  children: React.ReactNode;
  formProps?: Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit">;
}

export function AppForm<T extends ZodType<FieldValues, any, any>>({
  schema,
  options,
  onSubmit,
  children,
  formProps,
}: AppFormProps<T>) {
  const methods = useAppForm(schema, options);

  const onError = (errors: Record<string, any>) => {
    console.error("Form Validation Errors:", errors);
  };

  return (
    <FormProvider {...methods}>
      <form {...formProps} onSubmit={methods.handleSubmit(onSubmit, onError)}>
        {children}
      </form>
    </FormProvider>
  );
}
