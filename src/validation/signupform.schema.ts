import { z } from "zod";

export const signupFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(32, "Password must be at most 32 characters"),
})

export type SignupFormValues = z.infer<typeof signupFormSchema>;