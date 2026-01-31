import { Router } from "express";
import type { GetDriverPhoneUseCase } from "../../../application/use-cases/driver/index.js";
import { getDriverDetailsController, getDriverPhoneController } from "../controllers/driverControllers.js";
import { GetDriverDetailsUseCase } from "../../../application/use-cases/driver/get-driver-phone.use-case.js";

export function createDriverRoutes(getDriverPhone: GetDriverPhoneUseCase, getDriverDetails: GetDriverDetailsUseCase): Router {
  const router = Router();

  router.get("/drivers/:driverId/phone", getDriverPhoneController(getDriverPhone));
  router.post("/driverDetails/:driverId", getDriverDetailsController(getDriverDetails));

  return router;
}
