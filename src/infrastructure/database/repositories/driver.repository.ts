import type { Sequelize } from "sequelize";
import type { IDriverRepository } from "../../../application/ports/driver-repository.port.js";

export class DriverRepository implements IDriverRepository {
  constructor(private readonly sequelize: Sequelize) {}

  async getPhoneById(driverId: string): Promise<string | null> {
    const user = await this.sequelize.models.User.findOne({
      where: { employeeId: driverId },
      attributes: ["mobile"],
    });
    return user ? String(user.get("mobile")) : null;
  }
}