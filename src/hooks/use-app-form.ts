import { zodResolver } from '@hookform/resolvers/zod';
import { type FieldValues, type UseFormProps, useForm } from 'react-hook-form';
import type { z, ZodType } from 'zod';

export function useAppForm<
  T extends ZodType<FieldValues, any, any>
>(
  schema: T,
  options?: Omit<
    UseFormProps<z.input<T>, any, z.output<T>>,
    'resolver'
  >,
) {
  return useForm<z.input<T>, any, z.output<T>>({
    ...options,
    resolver: zodResolver(schema),
  });
}