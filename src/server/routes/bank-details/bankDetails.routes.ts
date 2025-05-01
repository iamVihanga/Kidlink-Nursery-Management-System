import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { z } from "zod";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";

import { serverAuthMiddleware } from "@/server/middlewares/auth-middleware";
import { BankDetailsSchema } from "@/types/schema-types/index";

export const tags = ["Bank Details"];

// ----------- Create Bank Details -----------
export const create = createRoute({
  tags,
  path: "/",
  method: "post",
  middleware: [serverAuthMiddleware],
  request: {
    body: jsonContentRequired(
      BankDetailsSchema.omit({
        updatedAt: true,
        createdAt: true,
        id: true
      }),
      "The nursery details to add"
    )
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      BankDetailsSchema,
      "Created bank details"
    ),
    [HttpStatusCodes.UNAUTHORIZED]: jsonContent(
      z.object({ message: z.string() }),
      "Unauthenticated request"
    )
  }
});

export type CreateRoute = typeof create;
