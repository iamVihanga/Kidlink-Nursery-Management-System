import { BankDetailsSchema } from "@/types/schema-types";
import { z } from "zod";

export const BankDetailsUpsertSchema = BankDetailsSchema.omit({
  nurseryDetailsId: true,
  updatedAt: true,
  createdAt: true,
  id: true
});

export type BankDetailsUpsertSchemaT = z.infer<typeof BankDetailsUpsertSchema>;
