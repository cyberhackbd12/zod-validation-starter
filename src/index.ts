import { contactFormSchema, orderPayloadSchema } from "./schemas";

function validateContactForm(rawInput: unknown) {
  const result = contactFormSchema.safeParse(rawInput);

  if (!result.success) {
    return {
      ok: false as const,
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    ok: true as const,
    data: result.data,
  };
}

function validateOrderPayload(rawInput: unknown) {
  const result = orderPayloadSchema.safeParse(rawInput);

  if (!result.success) {
    return {
      ok: false as const,
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    ok: true as const,
    data: result.data,
  };
}

// Example usage
const sampleContact = validateContactForm({
  fullName: "Alex Morgan",
  email: "alex@example.com",
  message: "Looking for details about your onboarding workflow.",
});

const sampleOrder = validateOrderPayload({
  itemId: "prod-101",
  quantity: "2",
  paymentMethod: "cash_on_delivery",
});

console.log("Contact Validation:", sampleContact);
console.log("Order Validation:", sampleOrder);
