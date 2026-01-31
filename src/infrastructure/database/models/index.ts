import type { Sequelize } from "sequelize";
import DriverModel, {
  driverModelAttributes,
  driverModelOptions,
} from "./driverModel.js";
import StationModel, {
  stationModelAttributes,
  stationModelOptions,
} from "./stationModel.js";
import UsersModel, {
  usersModelAttributes,
  usersModelOptions,
} from "./usersModel.js";

/**
 * Register all Sequelize models and associations.
 * Call this once after creating the Sequelize instance (e.g. in composition root).
 *
 * Example:
 *   import { User } from "./user.model.js";
 *   export function registerModels(sequelize: Sequelize): void {
 *     User.init(..., { sequelize });
 *     sequelize.models.User = User;
 *     // User.associate?.(sequelize.models);
 *   }
 */
export function registerModels(sequelize: Sequelize): void {
  DriverModel.init(driverModelAttributes, {
    ...driverModelOptions,
    sequelize,
  });
  sequelize.models.Driver = DriverModel;

  StationModel.init(stationModelAttributes, {
    ...stationModelOptions,
    sequelize,
  });
  sequelize.models.Station = StationModel;

  UsersModel.init(usersModelAttributes, {
    ...usersModelOptions,
    sequelize,
  });
  sequelize.models.User = UsersModel;

  // User (basic) and Driver (personalized) linked by employeeId
  UsersModel.hasOne(DriverModel, {
    foreignKey: "employeeId",
    sourceKey: "employeeId",
    as: "driver",
  });
  DriverModel.belongsTo(UsersModel, {
    foreignKey: "employeeId",
    targetKey: "employeeId",
    as: "user",
  });
}
