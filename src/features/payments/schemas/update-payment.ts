import { z } from "zod";
import { PaymentSchema } from "@/types/schema-types";

export const updatePaymentSchema = PaymentSchema.omit({
  createdAt: true,
  updatedAt: true,
  id: true
}).partial();

export type UpdatePaymentSchema = z.infer<typeof updatePaymentSchema>;
