import { createRouter } from "@/server/helpers/create-app";

import * as handlers from "./children.handlers";
import * as routes from "./children.routes";

// Now use the withAuth wrapper for the routes that need authentication
const router = createRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.findOne, handlers.findOne)
  .openapi(routes.update, handlers.update)
  .openapi(routes.remove, handlers.remove)
  .openapi(routes.assign, handlers.assign)
  .openapi(routes.badges, handlers.badges);

export default router;
