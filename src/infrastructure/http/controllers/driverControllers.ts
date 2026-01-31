import type { Request, Response } from "express";
import type { GetDriverPhoneUseCase } from "../../../application/use-cases/driver/index.js";
import { GetDriverDetailsUseCase } from "../../../application/use-cases/driver/get-driver-phone.use-case.js";

export function getDriverPhoneController(
  getDriverPhone: GetDriverPhoneUseCase,
) {
  return async (req: Request, res: Response): Promise<void> => {
    console.log("getDriverPhoneController");
    console.log(req.params);
    const driverId = req.params.driverId;

    console.log("driverId", driverId);
    const phone = await getDriverPhone.execute(driverId as string);
    if (phone === null) {
      res.status(404).json({ error: "Driver not found", phone: null });
      return;
    }
    res.json({ phone });
  };
}

export function getDriverDetailsController(getDriverDetails: GetDriverDetailsUseCase) {
    return async (req: Request, res: Response): Promise<void> => {
        console.log("getDriverDetailsController");
        const driverId = req.params.driverId;
        console.log("driverId => ", driverId);
        const driverDetails = await getDriverDetails.execute(driverId as string);
        console.log("driverDetails => ", driverDetails);
        if (driverDetails === null) {
            res.status(404).json({ error: "Driver not found", driverDetails: null });
            return;
        }
        res.json({ user: driverDetails.user, driver: driverDetails.driver });
    };
}