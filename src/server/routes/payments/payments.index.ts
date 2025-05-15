import { createRouter } from "@/server/helpers/create-app";

import * as handlers from "./payments.handlers";
import * as routes from "./payments.routes";

// Now use the withAuth wrapper for the routes that need authentication
const router = createRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.update, handlers.update);

export default router;
