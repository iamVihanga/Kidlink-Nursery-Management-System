import { createRouter } from "@/server/helpers/create-app";

import * as handlers from "./nurseries.handlers";
import * as routes from "./nurseries.routes";

// Now use the withAuth wrapper for the routes that need authentication
const router = createRouter()
  .openapi(routes.list, handlers.list)

  // Nursery Details
  .openapi(routes.getDetails, handlers.getDetails)
  .openapi(routes.addDetails, handlers.addDetails)

  // Bank Details
  .openapi(routes.getBankDetails, handlers.getBankDetails)
  .openapi(routes.createBankDetails, handlers.createBankDetails);

export default router;
