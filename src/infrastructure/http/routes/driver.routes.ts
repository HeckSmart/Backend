import { Router } from "express";
import type { GetDriverPhoneUseCase } from "../../../application/use-cases/driver/index.js";
import { getDriverPhoneController } from "../controllers/driverControllers.js";

export function createDriverRoutes(getDriverPhone: GetDriverPhoneUseCase): Router {
  const router = Router();

  router.get("/drivers/:driverId/phone", getDriverPhoneController(getDriverPhone));

  return router;
}
