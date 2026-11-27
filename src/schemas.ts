import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters long"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{8,15}$/, "Invalid phone number format")
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters"),
});

export const orderPayloadSchema = z.object({
  itemId: z.string().min(1, "Item ID is required"),
  quantity: z.coerce
    .number()
    .int("Quantity must be a whole number")
    .min(1, "Minimum quantity is 1")
    .max(100, "Maximum quantity per order is 100"),
  paymentMethod: z.enum(["card", "bank_transfer", "cash_on_delivery"]),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type OrderPayloadInput = z.infer<typeof orderPayloadSchema>;
