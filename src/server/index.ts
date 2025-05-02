import { createApp } from "@/server/helpers/create-app";
import { configureOpenAPI } from "@/server/helpers/configure-open-api";

// Routes
import { authController } from "@/server/routes/auth/auth.routes";

import rootRoute from "@/server/routes/root/index.route"; // Test Purpose
import tasksRoute from "@/server/routes/tasks/tasks.index"; // Test Purpose

import nurseriesRoute from "@/server/routes/nurseries/nurseries.index";
// import bankDetailsRoute from "@/server/routes/bank-details/bankDetails.index";
import teachersRoute from "@/server/routes/teachers/teachers.index";
import parentsRoute from "@/server/routes/parents/parents.index";
import adminsRoute from "@/server/routes/admins/admins.index";

const app = createApp();

// Configure Open API Documentation
configureOpenAPI(app);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
  .route("/auth", authController)
  .route("/", rootRoute)
  .route("/tasks", tasksRoute)
  .route("/nurseries", nurseriesRoute)
  // .route("/bank-details", bankDetailsRoute)
  .route("/admins", adminsRoute)
  .route("/teachers", teachersRoute)
  .route("/parents", parentsRoute);

export type AppType = typeof routes;

export default app;
