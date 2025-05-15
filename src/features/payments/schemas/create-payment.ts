import { z } from "zod";
import { PaymentSchema } from "@/types/schema-types";

export const createPaymentSchema = PaymentSchema.omit({
  createdAt: true,
  updatedAt: true,
  id: true
});

export type CreatePaymentSchema = z.infer<typeof createPaymentSchema>;
