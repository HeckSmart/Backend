import type { Sequelize } from "sequelize";
import type {
  DriverDetailsResult,
  IDriverRepository,
} from "../../../application/ports/driver-repository.port.js";

const USER_BASIC_ATTRIBUTES = [
  "id",
  "name",
  "email",
  "mobile",
  "employeeId",
  "createdAt",
  "updatedAt",
] as const;

export class DriverRepository implements IDriverRepository {
  constructor(private readonly sequelize: Sequelize) {}

  async getPhoneById(driverId: string): Promise<string | null> {
    const user = await this.sequelize.models.User.findOne({
      where: { employeeId: driverId },
      attributes: ["mobile"],
    });
    return user ? String(user.get("mobile")) : null;
  }

  async getDriverDetailsById(driverId: string): Promise<DriverDetailsResult | null> {
    const userWithDriver = await this.sequelize.models.User.findOne({
      where: { employeeId: driverId },
      attributes: [...USER_BASIC_ATTRIBUTES],
      include: [
        {
          model: this.sequelize.models.Driver,
          as: "driver",
          required: true,
        },
      ],
    });

    if (!userWithDriver) return null;

    const plain = userWithDriver.get({ plain: true }) as Record<string, unknown> & {
      id: number;
      name: string;
      email: string | null;
      mobile: string;
      employeeId: string | null;
      createdAt?: Date;
      updatedAt?: Date;
      driver?: DriverDetailsResult["driver"];
    };
    if (!plain.driver) return null;

    return {
      user: {
        id: plain.id,
        name: plain.name,
        email: plain.email,
        mobile: plain.mobile,
        employeeId: plain.employeeId,
        createdAt: plain.createdAt,
        updatedAt: plain.updatedAt,
      },
      driver: plain.driver,
    };
  }
}