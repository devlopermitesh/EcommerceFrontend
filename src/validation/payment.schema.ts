import { z } from "zod";
import { addressSchema } from "./address.schema";
export const paymentSchema = z.object({
  cardHolderName: z.string(),
  cardNumber: z.string().min(16).max(19),
  expiryDate: z.string(),
  cvv: z.string().min(3).max(4),
  billingAddress: addressSchema,
  saveCard: z.boolean(),
  cardType: z.enum(["Visa", "MasterCard", "Amex", "Other"]).optional(),
});

export type PaymentSchemaType = z.infer<typeof paymentSchema>;