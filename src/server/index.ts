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
import usersRoute from "@/server/routes/users/users.index";
import childrenRoute from "@/server/routes/children/children.index";
import classesRoute from "@/server/routes/classes/classes.index";
import badgesRoute from "@/server/routes/badges/badges.index";
import feedbacksRoute from "@/server/routes/feedbacks/feedbacks.index";
import paymentsRoute from "@/server/routes/payments/payments.index";
import notificationsRoute from "@/server/routes/notifications/notifications.index";

const app = createApp();

// Configure Open API Documentation
configureOpenAPI(app);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
  .route("/auth", authController)
  .route("/", rootRoute)
  .route("/tasks", tasksRoute)
  .route("/users", usersRoute)
  .route("/nurseries", nurseriesRoute)
  // .route("/bank-details", bankDetailsRoute)
  .route("/admins", adminsRoute)
  .route("/teachers", teachersRoute)
  .route("/parents", parentsRoute)
  .route("/children", childrenRoute)
  .route("/classes", classesRoute)
  .route("/badges", badgesRoute)
  .route("/feedbacks", feedbacksRoute)
  .route("/payments", paymentsRoute)
  .route("/notifications", notificationsRoute);

export type AppType = typeof routes;

export default app;
