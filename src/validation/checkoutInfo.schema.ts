import { z } from "zod";

 const checkoutinfo=z.object({
  firstName: z.string().min(1, "First name is required"),
  companyName: z.string().optional(),
  address: z.string().min(1, "Address is required"),
  apartment: z.string().optional(),
  city: z.string().min(1, "City is required"),
  phone: z.string().min(10, "Phone is required"),
  email: z.string().email("Invalid email"),
  saveInfo: z.boolean().optional(),
  payment: z.enum(["bank", "cod"]),
  coupon: z.string().optional(),
});
export default checkoutinfo