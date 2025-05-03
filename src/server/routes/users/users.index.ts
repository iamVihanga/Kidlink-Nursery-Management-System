import { createRouter } from "@/server/helpers/create-app";

import * as handlers from "./users.handlers";
import * as routes from "./users.routes";

// Now use the withAuth wrapper for the routes that need authentication
const router = createRouter().openapi(routes.getOne, handlers.getOne);

export default router;
