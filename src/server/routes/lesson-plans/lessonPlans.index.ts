import { createRouter } from "@/server/helpers/create-app";

import * as handlers from "./lessonPlans.handlers";
import * as routes from "./lessonPlans.routes";

// Create the router with the OpenAPI routes
const router = createRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.findOne, handlers.findOne)
  .openapi(routes.update, handlers.update)
  .openapi(routes.remove, handlers.remove);

export default router;
