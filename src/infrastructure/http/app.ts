import express from "express";
import { json } from "express";
import { createRoutes } from "./routes/index.js";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import { notFoundHandler } from "./middlewares/not-found.middleware.js";
import type { RouteDependencies } from "./routes/index.js";

export function createApp(deps: RouteDependencies): express.Application {
  const app = express();

  app.use(json());
  app.use(createRoutes(deps));
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
