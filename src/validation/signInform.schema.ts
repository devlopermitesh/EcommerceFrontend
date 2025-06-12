import { z } from "zod";

export const signInFormSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
        .max(32, "Password must be at most 32 characters"),
})

export type SignInFormValues = z.infer<typeof signInFormSchema>;