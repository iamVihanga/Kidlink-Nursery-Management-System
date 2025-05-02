import { createRouter } from "@/server/helpers/create-app";

import * as handlers from "./bankDetails.handlers";
import * as routes from "./bankDetails.routes";

// Now use the withAuth wrapper for the routes that need authentication
const router = createRouter().openapi(routes.create, handlers.createHandler);

export default router;
