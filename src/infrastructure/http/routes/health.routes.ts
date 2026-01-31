import { Router, type Request, type Response } from "express";
import type { CheckHealthUseCase } from "../../../application/use-cases/health/index.js";

export function createHealthRoutes(checkHealth: CheckHealthUseCase): Router {
  const router = Router();

  router.get("/health", async (_req: Request, res: Response) => {
    const result = await checkHealth.execute();
    res.json(result);
  });

  return router;
}
