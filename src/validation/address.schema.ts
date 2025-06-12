import * as z from "zod";
export const addressSchema = z.object({
  addressLabel: z.string(),
  fullName: z.string(),
  phoneNumber: z.string(),
  country: z.string(),
  state: z.string(),
  city: z.string(),
  zipCode: z.string(),
  streetAddress: z.string(),
  isDefault: z.boolean(),
});

export type AddressSchemaType = z.infer<typeof addressSchema>;