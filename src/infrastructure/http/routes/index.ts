import { Router } from "express";
import { createDriverRoutes } from "./driver.routes.js";
import { createHealthRoutes } from "./health.routes.js";
import type { GetDriverPhoneUseCase } from "../../../application/use-cases/driver/index.js";
import type { CheckHealthUseCase } from "../../../application/use-cases/health/index.js";

export interface RouteDependencies {
  checkHealth: CheckHealthUseCase;
  getDriverPhone: GetDriverPhoneUseCase;
}

export function createRoutes(deps: RouteDependencies): Router {
  const router = Router();

  router.use("/api", createHealthRoutes(deps.checkHealth));
  router.use("/api", createDriverRoutes(deps.getDriverPhone));

  return router;
}
