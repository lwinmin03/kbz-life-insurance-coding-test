import z from "zod";

export const OrderInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  
  email: z.email("Invalid email address").trim().toLowerCase(),
phoneNumber: z
  .string()
  .trim()
  .regex(
    /^\+?[0-9\s\-()]{9,12}$/,
    "Invalid phone number format"
  )
  .or(z.literal("")), 
  address: z.string().min(1, "Address is required"),
  

  shiiping: z.array(z.enum(["free", "paid"])).default(["free"]),
  payment: z.array(z.enum(["COD", "KBZ"])).default(["KBZ"]),
});

export type OrderInfoFormValues=z.infer <typeof OrderInfoSchema>
 