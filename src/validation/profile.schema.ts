import { z } from "zod";

export const profileSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  dateOfBirth: z.string().optional(),
  gender: z.enum(["Male", "Female", "Other"]).optional(),
  profilePicture: z.instanceof(File).optional(),
  languagePreference: z.string().optional(),
  newsletterSubscribed: z.boolean(),
});

export type ProfileSchemaType = z.infer<typeof profileSchema>;