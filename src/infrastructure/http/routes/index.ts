import { Router } from "express";
import { createDriverRoutes } from "./driver.routes.js";
import { createHealthRoutes } from "./health.routes.js";
import type {
  GetDriverDetailsUseCase,
  GetDriverPhoneUseCase,
} from "../../../application/use-cases/driver/index.js";
import type { CheckHealthUseCase } from "../../../application/use-cases/health/index.js";

export interface RouteDependencies {
  checkHealth: CheckHealthUseCase;
  getDriverPhone: GetDriverPhoneUseCase;
  getDriverDetails: GetDriverDetailsUseCase;
}

export function createRoutes(deps: RouteDependencies): Router {
  const router = Router();

  router.use("/api", createHealthRoutes(deps.checkHealth));
  router.use("/api", createDriverRoutes(deps.getDriverPhone, deps.getDriverDetails));

  return router;
}
