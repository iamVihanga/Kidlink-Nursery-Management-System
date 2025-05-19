import { createRouter } from "@/server/helpers/create-app";

import * as handlers from "./notifications.handlers";
import * as routes from "./notifications.routes";

// Now use the withAuth wrapper for the routes that need authentication
const router = createRouter()
  .openapi(routes.get, handlers.get)
  .openapi(routes.send, handlers.send)
  .openapi(routes.getTags, handlers.getTags)
  .openapi(routes.createTag, handlers.createTag);

export default router;
