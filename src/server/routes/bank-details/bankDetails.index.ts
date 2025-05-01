import { createRouter } from "@/server/helpers/create-app";

import * as handlers from "./bankDetails.handlers";
import * as routes from "./bankDetails.routes";

// Now use the withAuth wrapper for the routes that need authentication
const router = createRouter().openapi(routes.create, handlers.createHandler);
//   .openapi(routes.getOne, handlers.getOne)
//   .openapi(routes.create, handlers.create)
//   .openapi(routes.update, handlers.update)
//   .openapi(routes.remove, handlers.remove);

export default router;
