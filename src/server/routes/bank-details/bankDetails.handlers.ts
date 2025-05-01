import * as HttpStatusCodes from "stoker/http-status-codes";

import { prisma } from "@/server/prisma/client";

import { AppRouteHandler } from "@/types/server";
import { CreateRoute } from "./bankDetails.routes";

export const createHandler: AppRouteHandler<CreateRoute> = async (c) => {
  const user = c.get("user");

  if (!user) {
    return c.json(
      { message: "Unauthenticated user" },
      HttpStatusCodes.UNAUTHORIZED
    );
  }

  const body = c.req.valid("json");

  //   Create bank details record
  const createdBankDetails = await prisma.bankDetails.create({
    data: body
  });

  return c.json(createdBankDetails, HttpStatusCodes.OK);
};
