import { Router } from "express";
import { createHealthRoutes } from "./health.routes.js";
import type { CheckHealthUseCase } from "../../../application/use-cases/health/index.js";

export interface RouteDependencies {
  checkHealth: CheckHealthUseCase;
}

export function createRoutes(deps: RouteDependencies): Router {
  const router = Router();

  router.use("/api", createHealthRoutes(deps.checkHealth));

  return router;
}
