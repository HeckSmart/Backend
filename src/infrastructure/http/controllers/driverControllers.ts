import type { Request, Response } from "express";
import type { GetDriverPhoneUseCase } from "../../../application/use-cases/driver/index.js";

export function getDriverPhoneController(
  getDriverPhone: GetDriverPhoneUseCase
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
