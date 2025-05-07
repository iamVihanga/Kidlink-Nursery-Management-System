import { createRouter } from "@/server/helpers/create-app";

import * as handlers from "./badges.handlers";
import * as routes from "./badges.routes";

// Now use the withAuth wrapper for the routes that need authentication
const router = createRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.assign, handlers.assign);

export default router;
